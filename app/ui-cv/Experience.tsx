import Link from "next/link";
import { Years } from "./Years";
import { Title } from "./Title";
import cv from "../cvconfig";

export const Experience = () => {
  return (
    <div className="flex flex-col gap-8">
      {cv.jobs.map((job, index) => (
        <div key={index}>
          <Years>{job.years}</Years>
          <div>
            <div className="text-xl">
              <h3>
                <Title>{job.title}</Title> at{" "}
                <Link href={job.url}>{job.company}</Link>
              </h3>
            </div>

            {job.experience}
          </div>
        </div>
      ))}
    </div>
  );
};
