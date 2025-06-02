import { NextResponse } from "next/server";

import { usePhotoDisabled } from "@/lib/geolocation";
import { useCV } from "@/lib/useCV";
import { redirect } from "next/navigation";
export async function GET() {
  const cv = await useCV();
  const photoDisabled = await usePhotoDisabled();
  const name = cv.personal.name.replaceAll(" ", "_");

  const filename = photoDisabled
    ? `${name}_CV_no_photo.pdf`
    : `${name}_CV_with_photo.pdf`;

  redirect(`/cv/${filename}`);
}
