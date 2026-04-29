import { ReactNode } from "react";

export const Title = ({ children }: { children: ReactNode }) => {
  return <span className="font-bold text-xl">{children}</span>;
};
