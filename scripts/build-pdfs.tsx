import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { CVPdf } from "../app/ui-cv/CVPdf";
import cv from "../app/cvconfig";

async function generatePDFs() {
  console.log("🔄 Generating PDF variants...");

  try {
    // Ensure output directory exists
    const outputDir = join(process.cwd(), "public", "generated");
    mkdirSync(outputDir, { recursive: true });

    const name = cv.personal.name.replaceAll(" ", "_");

    // Generate PDF with photo
    console.log("📄 Generating PDF with photo...");
    const photoPath = join(process.cwd(), "public", cv.personal.photoPdf);
    const pdfWithPhoto = await renderToBuffer(<CVPdf photo={photoPath} />);

    writeFileSync(join(outputDir, `${name}_CV_with_photo.pdf`), pdfWithPhoto);
    console.log("✅ PDF with photo generated");

    // Generate PDF without photo
    console.log("📄 Generating PDF without photo...");
    const pdfWithoutPhoto = await renderToBuffer(<CVPdf photo={null} />);

    writeFileSync(join(outputDir, `${name}_CV_no_photo.pdf`), pdfWithoutPhoto);
    console.log("✅ PDF without photo generated");

    console.log("🎉 All PDF variants generated successfully!");
  } catch (error) {
    console.error("❌ Error generating PDFs:", error);
    process.exit(1);
  }
}

generatePDFs();
