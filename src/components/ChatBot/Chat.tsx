"use client";

import { PopoverContent } from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { formatDate } from "@/utils/dates";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";
import { type KeyboardEvent, useEffect, useReducer, useRef } from "react";
import { sendMessage } from "@/app/lib/chat/actions";
import { Message } from "./Message";
import { reducer, type ChatState } from "./reducer";

const initialState: ChatState = {
  messages: [],
  isTyping: false,
  currentMessage: "",
};

export function Chat() {
  const [{ messages, isTyping, currentMessage }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const onSendMessage = async () => {
    const messageToSend = currentMessage;
    dispatch({ type: "SEND_MESSAGE" });
    const replyMessage = await sendMessage(messageToSend);

    dispatch({
      type: "RECEIVE_MESSAGE",
      payload: replyMessage,
    });
  };

  const onHandleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      await onSendMessage();
    }
  };

  return (
    <PopoverContent className="p-1 w-80">
      <div className="p-2 pb-6">
        <h3 className="text-center text-2xl">Racks Games</h3>
        <p className="text-center">Pregúntame lo que quieras</p>
      </div>

      <Card className="rounded-sm bg-accent p-2 gap-0">
        <CardHeader>
          <p className="text-center text-xs">{formatDate(new Date())}</p>
        </CardHeader>

        <CardContent className="grow min-h-72 max-h-96 overflow-y-auto flex flex-col space-y-2 py-6">
          {messages.map(({ response, message_type }) => {
            return (
              <Message
                key={response + Math.random()}
                isSent={message_type !== "assistant"}
              >
                {response}
              </Message>
            );
          })}
          <div ref={endRef} />
        </CardContent>

        {isTyping && (
          <p className="text-sm text-secondary-foreground pb-1">
            Escribiendo...
          </p>
        )}

        <CardFooter className="p-0 gap-2">
          <Input
            placeholder="Escribe aquí..."
            value={currentMessage}
            onChange={(e) => {
              dispatch({
                type: "TYPE_MESSAGE",
                payload: e.target.value,
              });
            }}
            onKeyDown={onHandleKeyDown}
          />
          <Button disabled={!currentMessage} onClick={onSendMessage}>
            <SendHorizonal />
          </Button>
        </CardFooter>
      </Card>
    </PopoverContent>
  );
}
