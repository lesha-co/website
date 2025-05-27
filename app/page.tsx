import Link from "next/link";

import Image from "next/image";
import { Skills } from "./ui-cv/Skills";
import { Experience } from "./ui-cv/Experience";
import cv from "./cvconfig";
import clsx from "clsx";
import { Education } from "./ui-cv/Education";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <div className="font-bold text-3xl mt-6 mb-3">
    <h2>{children}</h2>
  </div>
);

export default async function Home() {
  return (
    <div className="max-w-6xl min-h-screen mx-auto grid grid-cols-3 gap-4 lg:[grid-template-areas:_'main_main_header'] [grid-template-areas:_'header_header_header''main_main_main'] ">
      <div className="bg-zinc-100 [grid-area:header]  pt-12 ">
        <div className="lg:sticky flex flex-col items-center gap-12 top-12">
          <div className="flex flex-col items-center gap-4  w-8/10">
            <Image
              priority
              alt="My photo"
              src={cv.personal.photo}
              width={1200}
              height={1200}
              className="bg-black rounded-full"
            />
            <p className="text-xl">That's me</p>
          </div>
          <div className="px-8 w-full">
            <span className="font-bold text-xl">
              <h3>Contacts</h3>
            </span>
            <p>
              Website:{" "}
              <Link href={cv.personal.website}>
                {new URL(cv.personal.website).hostname}
              </Link>
            </p>
            <p>
              Email: <Link href={cv.personal.email}>{cv.personal.email}</Link>
            </p>

            <span className="font-bold text-xl">
              <h3>download pdf</h3>
            </span>
          </div>
        </div>
      </div>
      <div className="[grid-area:main] py-10">
        <div className="font-bold text-4xl mb-2">
          <h1>
            Hi. My name is <span>{cv.personal.name}</span>
          </h1>
        </div>
        <div className="font-bold text-3xl mb-1">
          <h2>{cv.hero.h1}</h2>
        </div>
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
