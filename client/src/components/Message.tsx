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
  const isOwn = message.senderId === currentUser.id;

  const timestamp = new Date(message.timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={`flex w-full px-4 md:px-8 py-1.5 ${
        isOwn ? "justify-end" : "justify-start"
      }`}
    >
      <div className="flex max-w-[78%] md:max-w-[65%] flex-col gap-1">
        {!isOwn && (
          <span className="px-1 text-xs font-medium text-zinc-400/80 mix-blend-plus-lighter">
            {message.senderName}
          </span>
        )}

        {/* True See-Through Apple Glass Layer */}
        <div
          className={`relative rounded-full px-5 py-2 text-sm leading-relaxed backdrop-blur-2xl backdrop-saturate-150 border transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.15),inset_0_1px_1px_rgba(255,255,255,0.1)] ${
            isOwn
              ? "bg-white/[0.07] border-white/[0.18] text-white mix-blend-plus-lighter shadow-white/[0.02]"
              : "bg-white/[0.03] border-white/[0.08] text-zinc-200 mix-blend-plus-lighter"
          }`}
        >
          <p className="whitespace-pre-wrap break-words tracking-wide">
            {message.content}
          </p>
        </div>

        {/* Status and Timestamp Footer */}
        <div
          className={`flex items-center gap-1 px-2 ${
            isOwn ? "justify-end" : "justify-start"
          }`}
        >
          <span className="text-[11px] text-zinc-400/70 mix-blend-plus-lighter">{timestamp}</span>
          {isOwn &&
            (status === "read" ? (
              <CheckCheck size={13} className="text-[#3884FF] filter drop-shadow-[0_0_4px_rgba(56,132,255,0.4)]" />
            ) : status === "delivered" ? (
              <CheckCheck size={13} className="text-zinc-400/60 mix-blend-plus-lighter" />
            ) : (
              <Check size={13} className="text-zinc-400/60 mix-blend-plus-lighter" />
            ))}
        </div>
      </div>
    </div>
  );
}
