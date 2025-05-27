import Link from "next/link";

export const Experience = (props: { jobs: Job[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {props.jobs.map((job, index) => (
        <div key={index}>
          <p className="font-bold">{job.years}</p>
          <div>
            <h3>
              {job.title} at <Link href={job.url}>{job.company}</Link>
            </h3>

            {job.experience}
          </div>
        </div>
      ))}
    </div>
  );
};
