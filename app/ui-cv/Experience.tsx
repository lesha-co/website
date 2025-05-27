import Link from "next/link";
import { Years } from "./Years";
import { Title } from "./Title";

export const Experience = (props: { jobs: Job[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {props.jobs.map((job, index) => (
        <div key={index}>
          <Years>{job.years}</Years>
          <div>
            <h3>
              <Title>{job.title}</Title> at{" "}
              <Link href={job.url}>{job.company}</Link>
            </h3>

            {job.experience}
          </div>
        </div>
      ))}
    </div>
  );
};
