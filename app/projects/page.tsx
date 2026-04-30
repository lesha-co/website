import { useConfig } from "@/lib/useConfig";
import { Metadata } from "next";
import MainLayout from "../main";
import Link from "next/link";
import { Button } from "../ui/Button";

export async function generateMetadata(): Promise<Metadata> {
  const cv = await useConfig();
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

const Project = ({
  project,
}: {
  project: LocalizedObject<WebsiteConfig["projects"][number]>;
}) => {
  return (
    <div className="">
      <h2 className="font-bold text-2xl mb-4">{project.title}</h2>
      {"iframe" in project.media && (
        <div className="overflow-hidden aspect-video mb-4">
          <iframe
            className="w-full h-full"
            width="1366"
            height="768"
            src={project.media.iframe}
            title="Mod demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {"picture" in project.media && (
        <div className="overflow-hidden aspect-video mb-4">
          <img
            className="w-full h-full object-cover"
            src={project.media.picture}
          ></img>
        </div>
      )}
      <p className="text-lg text-primary mb-4 ">{project.description}</p>
      <Button href={project.url} blank>
        View project
      </Button>
    </div>
  );
};

export default async function Home() {
  const config = await useConfig();
  return (
    <MainLayout
      hello={
        <>
          <div className="font-bold text-4xl mb-2">
            <h1>My projects</h1>
          </div>
          <p className="text-lg text-foreground/70">
            This is what I've been working on in my free time.
          </p>
        </>
      }
      sidebar={<Button href="/support">Support my work</Button>}
      main={
        <div className="flex flex-col gap-12">
          {config.projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      }
    />
  );
}
