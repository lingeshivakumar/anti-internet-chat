import { useState, type KeyboardEvent } from "react";
import { Paperclip, Send, Smile } from "lucide-react";

interface MessageInputProps {
  onSend?: (text: string) => void;
  disabled?: boolean;
}

export default function MessageInput({
  onSend,
  disabled = false,
}: MessageInputProps) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend?.(trimmed);
    setValue("");
  };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
    }
    };

  return (
    <div className="flex h-full items-center gap-2 md:gap-3 px-4 md:px-8">
      {/* Attachment */}
        <button
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
        
        /* Apple Glass Effect (Material) */
        bg-white/[0.06]
        backdrop-blur-xl
        border
        border-white/[0.12]
        text-zinc-400
        shadow-[0_4px_16px_rgba(0,0,0,0.25)]
        
        /* Smooth Transitions */
        transition-all
        duration-300
        ease-out

        /* Interaction States */
        hover:scale-105
        hover:bg-white/[0.12]
        hover:border-white/[0.25]
        hover:text-zinc-200
        hover:shadow-[0_8px_32px_rgba(255,255,255,0.08)]
        
        /* Active/Press State */
        active:scale-95
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
        rounded-2xl
        
        /* Apple Glass Effect (Material) */
        bg-white/[0.04]
        backdrop-blur-xl
        border
        border-white/[0.08]
        px-4
        shadow-[0_4px_16px_rgba(0,0,0,0.15)]
        
        /* Smooth Transitions */
        transition-all
        duration-300
        ease-out

        /* Focus States */
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
        placeholder={disabled ? "No device connected" : "Type a message..."}
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
        className="shrink-0 text-zinc-500 transition-colors duration-300 hover:text-zinc-300"
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
    
    /* Apple Glass Effect (Material) */
    bg-white/[0.06]
    backdrop-blur-xl
    border
    border-white/[0.12]
    text-zinc-200
    shadow-[0_4px_16px_rgba(0,0,0,0.25)]
    
    /* Smooth Transitions */
    transition-all
    duration-300
    ease-out

    /* Hover States (Only active when enabled) */
    enabled:hover:scale-105
    enabled:hover:bg-white/[0.12]
    enabled:hover:border-white/[0.25]
    enabled:hover:text-white
    enabled:hover:shadow-[0_8px_32px_rgba(255,255,255,0.08)]
    
    /* Active/Press State */
    enabled:active:scale-95
    
    /* Disabled State */
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