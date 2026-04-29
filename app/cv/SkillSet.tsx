import clsx from "clsx";

import { Skills } from "./Skills";
import { useCV } from "@/lib/useCV";

export const SkillSet = async () => {
  const cv = await useCV();
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
      {cv.skills.map((skill) => (
        <div
          key={skill.sectionName}
          className={clsx({ "lg:col-span-3": skill.wide })}
        >
          <div className="font-bold text-xl mb-2">
            <h3>{skill.sectionName}</h3>
          </div>
          <Skills skills={skill.skills} />
        </div>
      ))}
    </div>
  );
};
