import { io } from "socket.io-client";

export const socket = io(import.meta.env.VITE_SOCKET_URL, {
  autoConnect: false,
});

socket.on("connect", () => {
  console.log("✅ Connected:", socket.id);
});

socket.on("disconnect", () => {
  console.log("❌ Disconnected");
});

/* ---------- Connection ---------- */

export function onConnect(callback: () => void) {
  socket.on("connect", callback);
}

export function offConnect(callback: () => void) {
  socket.off("connect", callback);
}

/* ---------- User Registration ---------- */

export function registerUser(username: string) {
  socket.emit("register-user", username);
}

/* ---------- Online Users ---------- */

export function onUsersUpdated(
  callback: (users: { socketId: string; username: string }[]) => void,
) {
  socket.on("users-updated", callback);
}

export function offUsersUpdated(
  callback: (users: { socketId: string; username: string }[]) => void,
) {
  socket.off("users-updated", callback);
}