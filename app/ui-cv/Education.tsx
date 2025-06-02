import { useCV } from "@/lib/useCV";
import { Title } from "./Title";
import { Years } from "./Years";

export const Education = async () => {
  const cv = await useCV();
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
