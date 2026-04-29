import { Contacts } from "./Contacts";
import { DownloadCVButton } from "./DownloadCVButton";
import { Languages } from "./Languages";

import { Sidebar, SidebarSection } from "../ui/Sidebar";

export const CVSidebar = async ({ className }: { className?: string }) => {
  return (
    <Sidebar className={className}>
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
    </Sidebar>
  );
};
