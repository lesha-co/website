import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { CVPdf } from "../app/ui-cv/CVPdf";
import * as PDF from "@react-pdf/renderer";
import { join } from "node:path";

export async function generatePdf(
  cv: LocalizedObject<CV>,

  photo: boolean,
) {
  const photoPath = join(process.cwd(), "public", cv.personal.photoPdf);

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

  const buf = await renderToBuffer(
    <CVPdf photo={photo ? photoPath : null} cv={cv} />,
  );

  console.log(
    `✅ PDF CV ${photo ? "with photo" : "without photo"} for ${cv.personal.name} generated`,
  );
  return buf;
}
