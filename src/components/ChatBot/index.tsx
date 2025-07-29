import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { MessageCircle } from "lucide-react";
import { Chat } from "./Chat";

export function ChatBot() {
  return (
    <div className="fixed bottom-4 right-8">
      <Popover>
        <PopoverTrigger>
          <MessageCircle />
        </PopoverTrigger>

        <Chat />
      </Popover>
    </div>
  );
}
