import {
  socket,
  registerUser,
} from "./socket";

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

export interface ConnectedUser {
  socketId: string;
  username: string;
}

class ChatService {
  registerUser(username: string) {
    registerUser(username);
  }

  sendMessage(message: SendMessagePayload) {
    socket.emit("send-message", message);
  }

  onMessage(callback: (message: ChatMessage) => void) {
    socket.on("receive-message", callback);
  }

  offMessage(callback: (message: ChatMessage) => void) {
    socket.off("receive-message", callback);
  }

  onUsersUpdated(
    callback: (users: ConnectedUser[]) => void,
  ) {
    socket.on("users-updated", callback);
  }

  offUsersUpdated(
    callback: (users: ConnectedUser[]) => void,
  ) {
    socket.off("users-updated", callback);
  }
}

export const chatService = new ChatService();