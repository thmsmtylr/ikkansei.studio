import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
}

export function Grid({ children }: GridProps) {
  return (
    <div className="mx-5 grid grid-cols-6 gap-y-32 sm:grid-cols-12 sm:gap-x-20">
      {children}
    </div>
  );
}
