import clsx from "clsx";

export const OnlyMobile = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={clsx("lg:hidden", className)}>{children}</div>;
