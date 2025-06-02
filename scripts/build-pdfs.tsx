import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { CVPdf } from "../app/ui-cv/CVPdf";
import cvConfig from "../app/cvconfig";
import { useLocalizedObject } from "@/lib/localized";
import { localizations } from "@/lib/localizations";

import * as PDF from "@react-pdf/renderer";

async function generatePDFs() {
  PDF.Font.register({
    family: "Geist",
    fonts: [
      {
        src: "./public/geist/Geist-Medium.ttf",
        fontStyle: "normal",
        fontWeight: "medium",
      },
      {
        src: "./public/geist/Geist-Regular.ttf",
        fontStyle: "normal",
        fontWeight: "normal",
      },
      {
        src: "./public/geist/Geist-Bold.ttf",
        fontStyle: "normal",
        fontWeight: "bold",
      },
    ],
  });

  console.log("🔄 Generating PDF variants...");

  try {
    // Ensure output directory exists
    const outputDir = join(process.cwd(), "public", "generated");
    mkdirSync(outputDir, { recursive: true });

    localizations.map(async (localization) => {
      const cv = useLocalizedObject(cvConfig, localization);
      const name = cv.personal.name.replaceAll(" ", "_");

      // Generate PDF with photo
      console.log("📄 Generating PDF with photo...");
      const photoPath = join(process.cwd(), "public", cv.personal.photoPdf);
      const pdfWithPhoto = await renderToBuffer(
        <CVPdf photo={photoPath} cv={cv} />,
      );

      writeFileSync(join(outputDir, `${name}_CV_with_photo.pdf`), pdfWithPhoto);
      console.log("✅ PDF with photo generated");

      // Generate PDF without photo
      console.log("📄 Generating PDF without photo...");
      const pdfWithoutPhoto = await renderToBuffer(
        <CVPdf photo={null} cv={cv} />,
      );

      writeFileSync(
        join(outputDir, `${name}_CV_no_photo.pdf`),
        pdfWithoutPhoto,
      );
      console.log("✅ PDF without photo generated");
    });

    console.log("🎉 All PDF variants generated successfully!");
  } catch (error) {
    console.error("❌ Error generating PDFs:", error);
    process.exit(1);
  }
}

generatePDFs();
