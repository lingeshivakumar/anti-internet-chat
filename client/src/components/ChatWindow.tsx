import { useEffect, useState } from "react";
import { getIdentity } from "../services/identity.service";

import TopBar from "./TopBar";
import Message from "./Message";
import MessageInput from "./MessageInput";

import {
  chatService,
  type ChatMessage,
  type ConnectedUser,
} from "../services/chat.service";

export default function ChatWindow() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<ConnectedUser[]>([]);

  const currentUser = getIdentity();

  useEffect(() => {
    const handleMessage = (message: ChatMessage) => {
      setMessages((previous) => [...previous, message]);
    };

    chatService.onMessage(handleMessage);

    // Register this user with the server
    chatService.registerUser(currentUser.name);

    // Listen for online user updates
    chatService.onUsersUpdated(setOnlineUsers);

    return () => {
      chatService.offMessage(handleMessage);
      chatService.offUsersUpdated(setOnlineUsers);
    };
  }, []);

  const handleSend = (content: string) => {
    chatService.sendMessage({
      roomId: "global",
      senderId: currentUser.id,
      senderName: currentUser.name,
      content,
    });
  };

  return (
    <section
      className="
        relative
        flex
        h-full
        w-full
        flex-col
        overflow-hidden
        rounded-none
        lg:rounded-[30px]
        border-none
        lg:border
        lg:border-white/5
        bg-[#11161D]/60
        backdrop-blur-2xl
        shadow-[0_20px_60px_rgba(0,0,0,0.45)]
      "
    >
      {/* Neon Leak */}

      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-20
          lg:-right-50
          lg:-top-32
          z-0
          h-[800px]
          w-[900px]
          lg:h-[790px]
          lg:w-[860px]
          rounded-full
          bg-[radial-gradient(circle_at_center,_rgba(56,100,255,0.25)_0%,_rgba(56,132,255,0.08)_40%,_transparent_80%)]
          blur-2xl
          lg:blur-3xl
        "
      />

      {/* Inner Highlight */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-4
          lg:inset-x-8
          top-0
          z-10
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />

      {/* Top Bar */}

      <div
        className="
          relative
          z-10
          shadow-[0_8px_30px_rgba(0,0,0,0.18)]
        "
      >
        <TopBar users={onlineUsers} />
      </div>

      {/* Messages */}

      <div
        className="
          relative
          z-10
          flex-1
          overflow-y-auto
          px-6
          py-6
        "
      >
        {/* Top Fade */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            z-20
            h-8
            bg-gradient-to-b
            from-[#11161D]/60
            to-transparent
          "
        />

        <div className="space-y-4">
          {messages.map((message) => (
            <Message
              key={message.id}
              message={message}
            />
          ))}
        </div>

        {/* Bottom Fade */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-20
            h-8
            bg-gradient-to-t
            from-[#11161D]/60
            to-transparent
          "
        />
      </div>

      {/* Message Input */}

      <div
        className="
          relative
          z-10
          h-[72px]
          lg:h-[92px]
          border-t
          border-white/5
          flex
          items-center
          px-4
          lg:px-6
        "
      >
        <div className="w-full">
          <MessageInput
            onSend={handleSend}
            disabled={false}
          />
        </div>
      </div>
    </section>
  );
}