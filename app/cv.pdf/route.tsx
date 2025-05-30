import React from "react";
import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { CVPdf } from "../ui-cv/CVPdf";
import cv from "../cvconfig";
import { usePhotoDisabled } from "@/lib/geolocation";
import { join } from "node:path";
export async function GET() {
  const photoDisabled = await usePhotoDisabled();

  try {
    // Generate PDF buffer
    const pdfBuffer = await renderToBuffer(
      <CVPdf
        photo={photoDisabled ? null : join("public", cv.personal.photoPdf)}
      />,
    );
    const name = cv.personal.name.replaceAll(" ", "_");
    const filename = `${name}_CV.pdf`;
    // Return PDF response
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw error;
  }
}
