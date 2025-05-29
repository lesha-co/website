import Link from "next/link";

import Image from "next/image";
import { Experience } from "./ui-cv/Experience";
import cv from "./cvconfig";
import clsx from "clsx";
import { Education } from "./ui-cv/Education";
import { HelloBlock } from "./ui-cv/HelloBlock";
import { SkillSet } from "./ui-cv/SkillSet";
import { Languages } from "./ui-cv/Languages";
import { ThemeToggle } from "./components/theme-toggle";
import { Contacts } from "./ui-cv/Contacts";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <div className="font-bold text-3xl mt-6 mb-3">
    <h2>{children}</h2>
  </div>
);

export default async function Home() {
  return (
    <div
      className={clsx(
        "px-8",
        "max-w-6xl min-h-screen mx-auto grid gap-x-20",
        "lg:grid-cols-3 lg:[grid-template-areas:_'hello_hello_header''main_main_header']",
        "grid-cols-1 [grid-template-areas:_'hello''header''main']",
      )}
    >
      <div className="bg-secondary [grid-area:header] py-12 lg:sticky top-0 h-screen flex flex-col items-center gap-12 ">
        <div className="flex flex-col items-center gap-4  w-8/10">
          <Image
            priority
            alt="My photo"
            src={cv.personal.photo}
            width={1200}
            height={1200}
            className="bg-black rounded-full"
          />
          <p className="text-xl">That's me.</p>
        </div>
        <div className="px-8 w-full">
          <span className="font-bold text-xl">
            <h3>Contacts</h3>
          </span>
          <Contacts />
          {/* <span className="font-bold text-xl">
            <h3>download pdf</h3>
          </span> */}
        </div>
        <div className="flex-grow"></div>
        <div className="w-full flex justify-center  px-8 mb-4">
          <ThemeToggle />
        </div>
      </div>
      <HelloBlock className="[grid-area:hello] lg:pt-12" />
      <div className="[grid-area:main] lg:pb-12">
        <H2>Recent experience</H2>
        <Experience />
        <H2>Education</H2>
        <Education />
        <H2>Skills</H2>
        <SkillSet />
        <H2>Languages (human)</H2>
        <Languages />
      </div>
    </div>
  );
}
