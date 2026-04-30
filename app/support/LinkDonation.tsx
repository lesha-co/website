import Link from "next/link";
import { ReactNode } from "react";

export function LinkDonation({
  title,
  href,
  icon,
}: {
  title: string;
  href: string;
  icon: ReactNode;
}) {
  return (
    <div className="bg-secondary rounded-xl p-6 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center text-accent *:w-full *:h-full **:fill-accent">
          {icon}
        </div>
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="button inline-block text-center px-4 py-2 bg-button-background text-button-foreground hover:bg-button-hover-background rounded-lg"
      >
        Donate ↗
      </Link>
    </div>
  );
}
