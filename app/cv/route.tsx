import { generatePdf } from "@/lib/generate-pdf";
import { usePhotoDisabled } from "@/lib/geolocation";
import { useCV } from "@/lib/useCV";
import { redirect } from "next/navigation";

async function servePDF(cv: LocalizedObject<CV>, photo: boolean) {
  const { NextResponse } = await import("next/server");
  try {
    const buf = await generatePdf(cv, photo);

    // Return pre-generated PDF
    return new NextResponse(buf, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=test.pdf",
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

export async function GET() {
  const cv = await useCV();
  const photoDisabled = await usePhotoDisabled();
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "development") {
    return servePDF(cv, !photoDisabled);
  }

  const name = cv.personal.name.replaceAll(" ", "_");

  const filename = photoDisabled
    ? `${name}_CV_no_photo.pdf`
    : `${name}_CV_with_photo.pdf`;

  redirect(`/cv/${filename}`);
}
