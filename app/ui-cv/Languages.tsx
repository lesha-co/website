import cv from "../cvconfig";
import { Skills } from "./Skills";

export const Languages = () => {
  return (
    <div className="flex flex-col gap-4">
      <Skills
        skills={cv.languages.map((lang) => `${lang.lang} — ${lang.level}`)}
      />
    </div>
  );
};
