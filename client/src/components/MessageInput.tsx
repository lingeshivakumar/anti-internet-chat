import { useState, type KeyboardEvent } from "react";
import { Paperclip, Send, Smile } from "lucide-react";

interface MessageInputProps {
  onSend: (content: string) => void;
  disabled?: boolean;
}

export default function MessageInput({
  onSend,
  disabled = false,
}: MessageInputProps) {
  const [value, setValue] = useState("");

  const handleSend = (): void => {
    const trimmed = value.trim();

    if (!trimmed || disabled) {
      return;
    }

    onSend(trimmed);
    setValue("");
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
  ): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex h-full items-center gap-2 px-4 md:gap-3 md:px-8">
      {/* Attachment */}

      <button
        disabled={disabled}
        className="
          hidden
          sm:flex
          h-9
          w-9
          md:h-10
          md:w-10
          shrink-0
          items-center
          justify-center
          rounded-full

          bg-white/[0.06]
          backdrop-blur-xl
          border
          border-white/[0.12]

          text-zinc-400

          shadow-[0_4px_16px_rgba(0,0,0,0.25)]

          transition-all
          duration-300
          ease-out

          enabled:hover:scale-105
          enabled:hover:bg-white/[0.12]
          enabled:hover:border-white/[0.25]
          enabled:hover:text-zinc-200
          enabled:hover:shadow-[0_8px_32px_rgba(255,255,255,0.08)]

          enabled:active:scale-95

          disabled:cursor-not-allowed
          disabled:opacity-30
        "
        aria-label="Attach file"
      >
        <Paperclip size={17} />
      </button>

      {/* Input */}

      <div
        className="
          flex
          h-11
          md:h-12
          flex-1
          items-center
          gap-2
          rounded-full

          bg-white/[0.04]
          backdrop-blur-xl
          border
          border-white/[0.08]

          px-4

          shadow-[0_4px_16px_rgba(0,0,0,0.15)]

          transition-all
          duration-300
          ease-out

          focus-within:scale-[1.01]
          focus-within:bg-white/[0.09]
          focus-within:border-white/[0.22]
          focus-within:shadow-[0_8px_32px_rgba(255,255,255,0.04)]
        "
      >
        <input
          value={value}
          disabled={disabled}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={
            disabled
              ? "No device connected"
              : "Type a message..."
          }
          className="
            flex-1
            bg-transparent
            text-sm
            text-white
            placeholder:text-zinc-500
            outline-none
            disabled:cursor-not-allowed
          "
        />

        <button
          disabled={disabled}
          className="
            shrink-0
            text-zinc-500
            transition-colors
            duration-300
            enabled:hover:text-zinc-300
            disabled:opacity-30
            disabled:cursor-not-allowed
          "
          aria-label="Emoji"
        >
          <Smile size={18} />
        </button>
      </div>

      {/* Send */}

      <button
        onClick={handleSend}
        disabled={disabled || !value.trim()}
        className="
          flex
          h-11
          w-11
          md:h-12
          md:w-12
          shrink-0
          items-center
          justify-center
          rounded-full

          bg-white/[0.06]
          backdrop-blur-xl
          border
          border-white/[0.12]

          text-zinc-200

          shadow-[0_4px_16px_rgba(0,0,0,0.25)]

          transition-all
          duration-300
          ease-out

          enabled:hover:scale-105
          enabled:hover:bg-white/[0.12]
          enabled:hover:border-white/[0.25]
          enabled:hover:text-white
          enabled:hover:shadow-[0_8px_32px_rgba(255,255,255,0.08)]

          enabled:active:scale-95

          disabled:cursor-not-allowed
          disabled:opacity-30
        "
        aria-label="Send message"
      >
        <Send size={17} />
      </button>
    </div>
  );
}