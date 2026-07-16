import { Check, CheckCheck } from "lucide-react";

import type { ChatMessage } from "../services/chat.service";
import { getIdentity } from "../services/identity.service";

export type MessageStatus = "sent" | "delivered" | "read";

interface MessageProps {
  message: ChatMessage;
  status?: MessageStatus;
}

export default function Message({
  message,
  status = "sent",
}: MessageProps) {
  const currentUser = getIdentity();
  const isOwn =
  message.senderId === currentUser.id;

  const timestamp = new Date(
    message.timestamp,
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={`
        flex
        w-full
        px-4
        md:px-8
        py-1.5
        ${isOwn ? "justify-end" : "justify-start"}
      `}
    >
      <div className="flex max-w-[78%] md:max-w-[65%] flex-col gap-1">

        {!isOwn && (
          <span className="px-1 text-xs font-medium text-zinc-500">
            {message.senderName}
          </span>
        )}

        <div
          className={`
            relative
            rounded-2xl
            px-4
            py-2.5
            text-sm
            leading-relaxed
            shadow-[0_8px_24px_rgba(0,0,0,0.25)]
            transition-all
            duration-300
            ${
              isOwn
                ? "rounded-br-md bg-gradient-to-br from-[#3884FF] to-[#2A63D9] text-white"
                : "rounded-bl-md bg-[#1A202B] text-zinc-100"
            }
          `}
        >
          <p className="whitespace-pre-wrap break-words">
            {message.content}
          </p>
        </div>

        <div
          className={`
            flex
            items-center
            gap-1
            px-1
            ${isOwn ? "justify-end" : "justify-start"}
          `}
        >
          <span className="text-[11px] text-zinc-500">
            {timestamp}
          </span>

          {isOwn &&
            (status === "read" ? (
              <CheckCheck
                size={13}
                className="text-[#3884FF]"
              />
            ) : status === "delivered" ? (
              <CheckCheck
                size={13}
                className="text-zinc-500"
              />
            ) : (
              <Check
                size={13}
                className="text-zinc-500"
              />
            ))}
        </div>

      </div>
    </div>
  );
}