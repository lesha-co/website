import { usePhotoDisabled } from "@/lib/geolocation";
import { useConfig } from "@/lib/useConfig";
import { redirect } from "next/navigation";

export async function GET() {
  const cv = await useConfig();
  const photoDisabled = await usePhotoDisabled();
  const name = cv.personal.name.replaceAll(" ", "_");

  const filename = photoDisabled
    ? `${name}_CV_no_photo.pdf`
    : `${name}_CV_with_photo.pdf`;
  console.log(`GET(): redirecting to /cv/${filename}`);
  redirect(`/cv/${filename}`);
}
