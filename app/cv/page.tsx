import { useCV } from "@/lib/useCV";
import clsx from "clsx";
import { Metadata } from "next";
import { Contacts } from "./Contacts";
import { CVSidebar } from "./CVSidebar";
import { DownloadCVButton } from "./DownloadCVButton";
import { Education } from "./Education";
import { HelloBlock } from "./HelloBlock";
import { Languages } from "./Languages";
import { SkillSet } from "./SkillSet";
import { Experience } from "./Experience";
import { OnlyMobile } from "../ui/OnlyMobile";

import MainLayout from "../main";

export async function generateMetadata(): Promise<Metadata> {
  const cv = await useCV();
  return {
    title: cv.personal.name,
    description: cv.hero.subtext,
    icons: {
      icon: "/favicon.png",
    },
    openGraph: {
      title: cv.personal.name,
      description: cv.hero.subtext,
    },
  };
}

const H2 = ({ children }: { children: React.ReactNode }) => (
  <div className="font-bold text-3xl mt-16 mb-3">
    <h2>{children}</h2>
  </div>
);

export default async function Home() {
  return (
    <MainLayout
      hello={<HelloBlock />}
      sidebar={<CVSidebar />}
      main={
        <>
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
        </>
      }
    />
  );
}
