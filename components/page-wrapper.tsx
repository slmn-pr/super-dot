import { ReactNode } from "react";

export default function PageWrapper({
  children,
  ...deligated
}: {
  children: ReactNode;
}) {
  return (
    <div
      className="relative w-full max-w-md pt-4 px-2 sm:px-4 bg-white"
      role="main"
      {...deligated}
    >
      {children}
    </div>
  );
}
