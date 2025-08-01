import { type PropsWithChildren } from "react";

export function Pill({ children }: PropsWithChildren) {
  return (
    <span className="bg-accent text-foreground rounded-full py-2 px-4">
      {children}
    </span>
  );
}
