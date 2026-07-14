import { io } from "socket.io-client";

export const socket = io("http://localhost:3000", {
  autoConnect: false,
});

socket.on("connect", () => {
  console.log("✅ Connected:", socket.id);
});

socket.on("disconnect", () => {
  console.log("❌ Disconnected");
});