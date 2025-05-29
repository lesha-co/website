import { Title } from "./Title";
import { Years } from "./Years";
import cv from "../cvconfig";

export const Education = () => {
  return (
    <div className="flex flex-col gap-4">
      {cv.education.map((edu) => (
        <div key={edu.school}>
          <Years>{edu.years}</Years>
          <h3>
            <Title>{edu.degree}</Title>
          </h3>
          <p>{edu.school}</p>
        </div>
      ))}
    </div>
  );
};
