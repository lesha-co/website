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

const ProjectCard = () => {
  return (
    <div className="bg-card rounded-lg p-4">
      <h2 className="font-bold text-2xl mb-2"></h2>
      <p className="text-lg text-foreground/70"></p>
    </div>
  );
};

export default async function Home() {
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
      sidebar={<Button href="/donate">Donate</Button>}
      main={<>main</>}
    />
  );
}
