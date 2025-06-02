import { localized } from "@/lib/localized";
import { useCV } from "@/lib/useCV";

export const HelloBlock = async ({ className }: { className?: string }) => {
  const cv = await useCV();

  return (
    <div className={className}>
      <div className="font-bold text-4xl mb-2">
        <h1>
          {await localized({ en: "Hi. My name is", ru: "Привет. Я" })}{" "}
          <span>{cv.personal.name}</span>
        </h1>
      </div>
      <div className="font-bold text-2xl mb-4">
        <h2>{cv.hero.h1}</h2>
      </div>
      <p>{cv.hero.subtext}</p>
    </div>
  );
};
