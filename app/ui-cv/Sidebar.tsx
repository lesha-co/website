import clsx from "clsx";
import { Contacts } from "./Contacts";
import { DownloadCVButton } from "./DownloadCVButton";
import { Languages } from "./Languages";
import { ThemeToggle } from "../ui/theme-toggle";
import { Photo } from "./Photo";
import { usePhotoDisabled } from "@/lib/geolocation";

const SidebarSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={clsx("px-8 w-full", className)}>{children}</div>;
};

export const Sidebar = async ({ className }: { className?: string }) => {
  const photoDisabled = await usePhotoDisabled();

  return (
    <div
      className={clsx(
        className,
        "bg-secondary relative not-lg:hidden py-12 lg:sticky top-0 h-screen flex flex-col items-center gap-12 ",
      )}
    >
      <div
        className={clsx("flex flex-col items-center gap-4  w-8/10", {
          hidden: photoDisabled,
        })}
      >
        <Photo />
        <p className="text-xl">That's me.</p>
      </div>
      <SidebarSection className="not-lg:hidden text-center">
        <DownloadCVButton />
      </SidebarSection>
      <SidebarSection className="not-lg:hidden">
        <span className="font-bold text-xl">
          <h3>Contacts</h3>
        </span>
        <Contacts />
      </SidebarSection>

      <SidebarSection className="not-lg:hidden">
        <span className="font-bold text-xl">
          <h3>Languages</h3>
        </span>
        <Languages />
      </SidebarSection>

      <SidebarSection className="flex  flex-col justify-end items-center  flex-grow">
        <div className="h-8">
          <ThemeToggle />
        </div>
      </SidebarSection>
    </div>
  );
};
