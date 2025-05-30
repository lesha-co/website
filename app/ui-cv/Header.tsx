import Image from "next/image";
import cv from "../cvconfig";
import clsx from "clsx";
import { Contacts } from "./Contacts";
import { DownloadCVButton } from "./DownloadCVButton";
import { Languages } from "./Languages";
import { ThemeToggle } from "../ui/theme-toggle";

const SidebarSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={clsx("px-8 w-full", className)}>{children}</div>;
};

export const Header = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        className,
        "bg-secondary not-lg:hidden py-12 lg:sticky top-0 h-screen flex flex-col items-center gap-12 ",
      )}
    >
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
        <span className="font-bold text-xl">
          <h3>Contacts</h3>
        </span>
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
  );
};
