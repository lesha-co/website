import { useConfig } from "@/lib/useConfig";

export const Languages = async () => {
  const cv = await useConfig();
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
