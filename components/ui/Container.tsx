import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({
  children,
}: Props) {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
      {children}
    </div>
  );
}