import Link from "next/link";

const LinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-10 h-10"
    fill="currentColor"
  >
    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
  </svg>
);

export function LinkDonation({ title, href }: { title: string; href: string }) {
  return (
    <div className="bg-secondary rounded-xl p-6 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center text-accent">
          <LinkIcon />
        </div>
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="button inline-block text-center px-4 py-2 bg-button-background text-button-foreground hover:bg-button-hover-background rounded-lg transition-colors duration-200"
      >
        {title} ↗
      </Link>
    </div>
  );
}
