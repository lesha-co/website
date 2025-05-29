import Link from "next/link";

import Image from "next/image";
import { Experience } from "./ui-cv/Experience";
import cv from "./cvconfig";
import clsx from "clsx";
import { Education } from "./ui-cv/Education";
import { HelloBlock } from "./ui-cv/HelloBlock";
import { SkillSet } from "./ui-cv/SkillSet";
import { Languages } from "./ui-cv/Languages";
import { ThemeToggle } from "./ui/theme-toggle";
import { Contacts } from "./ui-cv/Contacts";
import { DownloadCVButton } from "./ui-cv/DownloadCVButton";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <div className="font-bold text-3xl mt-16 mb-3">
    <h2>{children}</h2>
  </div>
);

const SidebarSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={clsx("px-8 w-full", className)}>{children}</div>;
};

const OnlyMobile = ({ children }: { children: React.ReactNode }) => (
  <div className="lg:hidden">{children}</div>
);

export default async function Home() {
  return (
    <div
      className={clsx(
        "px-8",
        "max-w-5xl min-h-screen mx-auto grid gap-x-20",
        "lg:grid-cols-3 lg:[grid-template-areas:_'hello_hello_header''main_main_header']",
        "grid-cols-1 [grid-template-areas:_'hello''main']",
      )}
    >
      <div className="bg-secondary [grid-area:header] not-lg:hidden py-12 lg:sticky top-0 h-screen flex flex-col items-center gap-12 ">
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

        <SidebarSection>
          <p>Current location: Belgrade, Serbia</p>
          <p>Nationality: Russian</p>
        </SidebarSection>
        <SidebarSection className="not-lg:hidden">
          <Contacts />
        </SidebarSection>

        <SidebarSection className="not-lg:hidden">
          <DownloadCVButton />
        </SidebarSection>
        <SidebarSection className="not-lg:hidden">
          <span className="font-bold text-xl">
            <h3>Languages</h3>
          </span>
          <Languages />
        </SidebarSection>

        <SidebarSection className="flex flex-col justify-end items-center  flex-grow">
          <ThemeToggle />
        </SidebarSection>
      </div>
      <HelloBlock className="[grid-area:hello] pt-12" />
      <div className="[grid-area:main] pb-12">
        <OnlyMobile>
          <div className="mt-6 mb-6">
            <DownloadCVButton />
          </div>
        </OnlyMobile>
        <OnlyMobile>
          <H2>Contacts</H2>
          <Contacts />
        </OnlyMobile>
        <H2>Recent experience</H2>
        <Experience />
        <H2>Education</H2>
        <Education />
        <OnlyMobile>
          <H2>Languages</H2>
          <Languages />
        </OnlyMobile>
        <H2>Skills</H2>
        <SkillSet />
      </div>
    </div>
  );
}
