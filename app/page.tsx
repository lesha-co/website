import { useConfig } from "@/lib/useConfig";
import { Metadata } from "next";
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
  return (
    <MainLayout hello={<h1>hello</h1>} sidebar={<div></div>} main={<>main</>} />
  );
}
