export type ChatRole = "user" | "assistant";

export interface ChatAttachment {
  id: string;
  url: string;
  name: string;
}

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  attachments?: ChatAttachment[];
  status?: "sending" | "streaming" | "done" | "error";
  createdAt: number;
}
