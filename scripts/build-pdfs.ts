import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import cvConfig from "../app/cvconfig";
import { useLocalizedObject } from "../lib/localized";
import { localizations } from "../lib/localizations";
import { generatePdf } from "../lib/generate-pdf";

console.log("🔄 Generating PDF variants...");

(async () => {
  try {
    // Ensure output directory exists
    const outputDir = join(process.cwd(), "public", "cv");
    mkdir(outputDir, { recursive: true });
    await Promise.all(
      localizations.flatMap((localization) => {
        const cv = useLocalizedObject(cvConfig, localization);
        const name = cv.personal.name.replaceAll(" ", "_");

        return [
          //photo
          (async () => {
            const buf = await generatePdf(cv, true);
            await writeFile(join(outputDir, `${name}_CV_with_photo.pdf`), buf);
          })(),
          // no photo
          (async () => {
            const buf = await generatePdf(cv, false);
            await writeFile(join(outputDir, `${name}_CV_no_photo.pdf`), buf);
          })(),
        ];
      }),
    );

    console.log("🎉 All PDF variants generated successfully!");
  } catch (error) {
    console.error("❌ Error generating PDFs:", error);
    process.exit(1);
  }
})();
