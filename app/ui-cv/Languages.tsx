import cv from "../cvconfig";

export const Languages = () => {
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
