import { type PropsWithChildren } from "react";
import { Card } from "@/components/ui/card";
import clsx from "clsx";

type MessageProps = PropsWithChildren<{
  isSent: boolean;
}>;

export function Message({ children, isSent }: MessageProps) {
  return (
    <Card className={clsx(
      "rounded-lg p-2 text-sm max-w-5/6 w-fit",
      isSent ? "bg-primary text-primary-foreground self-end text-right " : "bg-secondary",
    )}>
      {children}
    </Card>
  );
}
