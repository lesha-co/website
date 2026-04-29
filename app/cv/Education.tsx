import { useConfig } from "@/lib/useConfig";
import { Title } from "./Title";
import { Years } from "./Years";

export const Education = async () => {
  const cv = await useConfig();
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
