import Link from "next/link";

import Image from "next/image";
import { Skills } from "./ui-cv/Skills";
import { Experience } from "./ui-cv/Experience";
import cv from "./cvconfig";
import clsx from "clsx";
import { Education } from "./ui-cv/Education";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <div className="font-bold text-3xl my-6">
    <h2>{children}</h2>
  </div>
);

export default async function Home() {
  return (
    <div className="max-w-6xl min-h-screen mx-auto grid grid-cols-3 gap-4 lg:[grid-template-areas:_'main_main_header'] [grid-template-areas:_'header_header_header''main_main_main'] ">
      <div className="not-lg:order-1 bg-zinc-100 [grid-area:header] flex flex-col items-center pt-12 gap-12">
        <Image
          priority
          alt="My photo"
          src={cv.personal.photo}
          width={200}
          height={200}
          className="bg-black rounded-full w-6/10"
        />
        <span>{cv.personal.name}</span>
        <div className="px-8 w-full">
          <span className="font-bold text-xl">
            <h3>Contacts</h3>
          </span>
          <p>
            <Link href={cv.personal.website}>
              {new URL(cv.personal.website).hostname}
            </Link>
          </p>
          <p>
            <Link href={cv.personal.email}>{cv.personal.email}</Link>
          </p>

          <span className="font-bold text-xl">
            <h3>download pdf</h3>
          </span>
        </div>
      </div>
      <div className="[grid-area:main]">
        <span className="font-bold">
          <h1>{cv.hero.h1}</h1>
        </span>
        <p>{cv.hero.subtext}</p>

        <H2>Recent experience</H2>
        <Experience jobs={cv.jobs} />
        <H2>Education</H2>
        <Education schools={cv.education} />
        <H2>Skills</H2>
        <div className="grid grid-cols-3 gap-5">
          {cv.skills.map((skill) => (
            <div
              key={skill.sectionName}
              className={clsx({ "col-span-2": skill.wide })}
            >
              <div className="font-bold text-2xl mb-2">
                <h3>{skill.sectionName}</h3>
              </div>
              <Skills skills={skill.skills} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
