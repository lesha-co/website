import { ReactNode } from "react";

export const Title = ({ children }: { children: ReactNode }) => {
  return <span className="font-bold">{children}</span>;
};
