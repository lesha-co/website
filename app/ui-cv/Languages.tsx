import { useCV } from "@/lib/useCV";

export const Languages = async () => {
  const cv = await useCV();
  return (
    <div>
      {cv.languages.map((lang) => (
        <p key={lang.lang}>
          {lang.lang} — {lang.level}
        </p>
      ))}
    </div>
  );
};
