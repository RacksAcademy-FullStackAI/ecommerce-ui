"use server";

export type TMessage = {
  response: string;
  conversation_id: string;
  message_type: "assistant" | (string & {});
};

export async function sendMessage(message: string): Promise<TMessage> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        response:
          "Para descargar un juego, puedes visitar nuestra página de descargas en el menú principal.",
        conversation_id: "1234567890",
        message_type: "assistant",
      });
    }, 3_000);
  });
}
