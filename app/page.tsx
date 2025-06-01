import { Experience } from "./ui-cv/Experience";

import clsx from "clsx";
import { Education } from "./ui-cv/Education";
import { HelloBlock } from "./ui-cv/HelloBlock";
import { SkillSet } from "./ui-cv/SkillSet";
import { Languages } from "./ui-cv/Languages";

import { Contacts } from "./ui-cv/Contacts";
import { DownloadCVButton } from "./ui-cv/DownloadCVButton";
import { Sidebar } from "./ui-cv/Sidebar";
import { OnlyMobile } from "./ui-cv/OnlyMobile";
import { ThemeToggle } from "./ui/theme-toggle";
import { Photo } from "./ui-cv/Photo";
import { usePhotoDisabled } from "@/lib/geolocation";
import { Status } from "./ui-cv/Status";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <div className="font-bold text-3xl mt-16 mb-3">
    <h2>{children}</h2>
  </div>
);

export default async function Home() {
  const photoDisabled = await usePhotoDisabled();
  return (
    <>
      <OnlyMobile className="flex justify-between bg-header px-8 py-4 h-20">
        <div
          className={clsx("h-full aspect-square", { hidden: photoDisabled })}
        >
          <Photo className="h-full rounded-full" />
        </div>
        <div className="h-full flex flex-col justify-center">
          <ThemeToggle />
        </div>
      </OnlyMobile>

      <div
        className={clsx(
          "px-8",
          "max-w-5xl min-h-screen mx-auto grid gap-x-20",
          "lg:grid-cols-3 lg:[grid-template-areas:_'hello_hello_header''main_main_header']",
          "grid-cols-1 [grid-template-areas:_'hello''main']",
        )}
      >
        <Sidebar className="[grid-area:header]" />
        <HelloBlock className="[grid-area:hello] pt-12" />
        <div className="[grid-area:main] pb-12">
          <OnlyMobile>
            <div className="mt-6 mb-6">
              <DownloadCVButton />
            </div>
          </OnlyMobile>
          <OnlyMobile>
            <H2>Contacts</H2>
            <Contacts className="grid gap-x-4 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]" />
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
          <H2>Status</H2>
          <Status />
        </div>
      </div>
    </>
  );
}
