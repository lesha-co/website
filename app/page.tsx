import { useConfig } from "@/lib/useConfig";
import { Metadata } from "next";
import Link from "next/link";
import MainLayout from "./main";

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

export default async function Home() {
  const cv = await useConfig();

  return (
    <MainLayout
      hello={
        <>
          <div className="font-bold text-4xl mb-2">
            <h1>{cv.personal.name}</h1>
          </div>
          <p className="text-lg text-foreground/70">{cv.hero.subtext}</p>
        </>
      }
      sidebar={<div />}
      main={
        <div className="flex flex-col gap-6 mt-8">
          <Link
            href="/cv"
            className="bg-secondary rounded-xl p-6 flex items-center justify-between transition-all duration-200 hover:scale-[1.02]"
          >
            <div>
              <h2 className="font-bold text-xl">CV</h2>
              <p className="text-foreground/70">
                View my experience, skills, and education
              </p>
            </div>
            <span className="text-accent text-2xl">→</span>
          </Link>
          <Link
            href="/donate"
            className="bg-secondary rounded-xl p-6 flex items-center justify-between transition-all duration-200 hover:scale-[1.02]"
          >
            <div>
              <h2 className="font-bold text-xl">Donate</h2>
              <p className="text-foreground/70">
                Support my work if you found it helpful
              </p>
            </div>
            <span className="text-accent text-2xl">→</span>
          </Link>
        </div>
      }
    />
  );
}
