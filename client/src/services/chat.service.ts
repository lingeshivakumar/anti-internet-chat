import { socket } from "./socket";

export interface SendMessagePayload {
  roomId: string;
  senderId: string;
  senderName: string;
  content: string;
}

export interface ChatMessage {
  id: string;
  roomId: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: number;
}

class ChatService {
  sendMessage(message: SendMessagePayload) {
    socket.emit("send-message", message);
  }

  onMessage(callback: (message: ChatMessage) => void) {
    socket.on("receive-message", callback);
  }

  offMessage(callback: (message: ChatMessage) => void) {
    socket.off("receive-message", callback);
  }
}

export const chatService = new ChatService();