"use client";
import clsx from "clsx";
import { setTimeout } from "node:timers";
import { useEffect, useState } from "react";

const Skill = ({ skill }: { skill: string }) => {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    setTimeout(() => setShown(true), Math.random() * 500);
  }, []);
  return (
    <li
      className={clsx(
        "bg-skill-background  text-skill-foreground rounded-sm px-2 py-1 transition-opacity",
        { "opacity-0": !shown, "opacity-100": shown },
      )}
      key={skill}
    >
      {skill}
    </li>
  );
};

export const Skills = ({ skills }: { skills: string[] }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Skill skill={skill} key={skill} />
      ))}
    </ul>
  );
};
