import Link from "next/link";

export const DownloadCVButton = () => {
  return (
    <Link
      prefetch={false}
      href="/cv.pdf"
      target="_blank"
      className="button inline-block px-4 py-2 bg-button-background text-button-foreground hover:bg-button-hover-background rounded-lg  transition-colors duration-200"
    >
      Download Resume ↗
    </Link>
  );
};
