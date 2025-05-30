import { NextResponse } from "next/server";
import cv from "../cvconfig";
import { usePhotoDisabled } from "@/lib/geolocation";
import { readFileSync } from "node:fs";
import { join } from "node:path";
export async function GET() {
  const photoDisabled = await usePhotoDisabled();
  const name = cv.personal.name.replaceAll(" ", "_");
  
  try {
    // Determine which pre-generated file to serve
    const filename = photoDisabled 
      ? `${name}_CV_no_photo.pdf`
      : `${name}_CV_with_photo.pdf`;
    
    const filePath = join(process.cwd(), 'public', 'generated', filename);
    const pdfBuffer = readFileSync(filePath);
    
    const downloadFilename = `${name}_CV.pdf`;
    
    // Return pre-generated PDF
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${downloadFilename}"`,
        "Cache-Control": "public, max-age=3600, immutable",
      },
    });
  } catch (error) {
    console.error("Error serving pre-generated PDF:", error);
    return new NextResponse("PDF not found. Please rebuild the application.", { 
      status: 404 
    });
  }
}
