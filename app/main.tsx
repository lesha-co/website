import { usePhotoDisabled } from "@/lib/geolocation";
import { OnlyMobile } from "./ui/OnlyMobile";
import clsx from "clsx";
import { Photo } from "./ui/Photo";
import { ThemeToggle } from "./ui/theme-toggle";
import { Sidebar } from "./ui/Sidebar";

export default async function MainLayout({
  hello,
  sidebar,
  main,
}: {
  hello: React.ReactNode;
  sidebar: React.ReactNode;
  main: React.ReactNode;
}) {
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
          "lg:grid-cols-3 lg:[grid-template-areas:_'hello_hello_sidebar''main_main_sidebar']",
          "grid-cols-1 [grid-template-areas:_'hello''main']",
        )}
      >
        <div className="[grid-area:hello] pt-12">{hello}</div>
        <Sidebar className="[grid-area:sidebar]">{sidebar}</Sidebar>
        <div className="[grid-area:main] pb-12">{main}</div>
      </div>
    </>
  );
}
