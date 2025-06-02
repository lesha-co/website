import { NextResponse } from "next/server";

import { usePhotoDisabled } from "@/lib/geolocation";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { useCV } from "@/lib/useCV";
export async function GET() {
  const cv = await useCV();
  const photoDisabled = await usePhotoDisabled();
  const name = cv.personal.name.replaceAll(" ", "_");

  try {
    // Determine which pre-generated file to serve
    const filename = photoDisabled
      ? `${name}_CV_no_photo.pdf`
      : `${name}_CV_with_photo.pdf`;

    const filePath = join(process.cwd(), "public", "generated", filename);
    console.log(filePath);
    const pdfBuffer = readFileSync(filePath);

    const downloadFilename = `${name}_CV.pdf`;

    const encoded = encodeURIComponent(downloadFilename);
    const contentDisposition = `inline; filename*=UTF-8''${encoded}`;
    // Return pre-generated PDF
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": contentDisposition,
        "Cache-Control": "public, max-age=3600, immutable",
      },
    });
  } catch (error) {
    console.error("Error serving pre-generated PDF:", error);
    return new NextResponse("PDF not found. Please rebuild the application.", {
      status: 404,
    });
  }
}
