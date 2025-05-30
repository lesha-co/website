import Image from "next/image";
import cv from "../cvconfig";
import clsx from "clsx";

export const Photo = ({ className }: { className?: string }) => (
  <Image
    priority
    alt="My photo"
    src={cv.personal.photo}
    width={1200}
    height={1200}
    className={clsx("bg-transparent rounded-full object-contain", className)}
  />
);
