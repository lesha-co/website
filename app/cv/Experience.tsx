import Link from "next/link";
import { useConfig } from "@/lib/useConfig";
import { Years } from "./Years";
import { Title } from "./Title";

export const Experience = async () => {
  const cv = await useConfig();
  return (
    <ul className="flex flex-col gap-8">
      {cv.jobs.map((job, index) => (
        <li key={index}>
          <Years>{job.years}</Years>
          <div>
            <div className="text-xl mb-2">
              <h3>
                <Title>{job.title}</Title> at{" "}
                <Link href={job.url}>{job.company}</Link>
              </h3>
            </div>

            <div className="flex flex-col gap-4 pl-4 border-l border-zinc-400">
              {job.experience}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
