import Image from "next/image";

import clsx from "clsx";
import { useCV } from "@/lib/useCV";

export const Photo = async ({ className }: { className?: string }) => {
  const cv = await useCV();
  return (
    <Image
      priority
      alt="My photo"
      src={cv.personal.photo}
      width={1200}
      height={1200}
      className={clsx("bg-transparent rounded-full object-contain", className)}
    />
  );
};
