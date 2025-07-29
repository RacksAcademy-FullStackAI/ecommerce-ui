import { type TMessage } from "@/app/lib/chat/actions";

export type ChatState = {
  messages: TMessage[];
  isTyping: boolean;
  currentMessage: string;
};

type ChatAction =
  | {
      type: "TYPE_MESSAGE";
      payload: string;
    }
  | {
      type: "SEND_MESSAGE";
    }
  | {
      type: "RECEIVE_MESSAGE";
      payload: TMessage;
    };

export function reducer(state: ChatState, action: ChatAction) {
  switch (action.type) {
    case "TYPE_MESSAGE":
      return {
        ...state,
        currentMessage: action.payload,
      };
    case "SEND_MESSAGE":
      return {
        ...state,
        isTyping: true,
        messages: [
          ...state.messages,
          {
            conversation_id: "123",
            response: state.currentMessage,
            message_type: "user",
          }
        ],
        currentMessage: '',
      };
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        isTyping: false,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
}
