import { useEffect, useRef, useState } from "react";
import { UserRound } from "lucide-react";

interface NameModalProps {
  onContinue: (name: string) => void;
}

export default function NameModal({ onContinue }: NameModalProps) {
  const [name, setName] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleContinue() {
    const trimmed = name.trim();

    if (!trimmed) return;

    onContinue(trimmed);
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/40
        backdrop-blur-xl
      "
    >
      {/* Ambient red glow — matches sidebar */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-20
          h-[700px]
          w-[700px]
          rounded-full
          bg-[radial-gradient(circle,_rgba(190,40,40,0.35)_0%,_rgba(190,40,40,0.1)_45%,_transparent_70%)]
          blur-3xl
        "
      />

      {/* Secondary cool glow — matches chat panel */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-52
          h-[600px]
          w-[600px]
          rounded-full
          bg-[radial-gradient(circle,_rgba(30,45,80,0.45)_0%,_transparent_70%)]
          blur-3xl
        "
      />

      {/* Card: Upgraded to Apple-Style Premium Frosted Glass */}
      <div
        className="
          relative
          w-[92%]
          max-w-sm
          rounded-3xl
          border
          border-white/[0.18]
          bg-white/[0.04]
          p-8
          backdrop-blur-2xl
          shadow-[0_24px_50px_-12px_rgba(0,0,0,0.7)]
        "
      >
        {/* Icon */}
        <div
          className="
            mx-auto
            mb-5
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            border-white/[0.12]
            bg-white/[0.06]
            backdrop-blur-md
          "
        >
          <UserRound size={26} className="text-white-100" />
        </div>

        <h1 className="text-center text-xl font-medium text-white/90 tracking-wide">
          Welcome
        </h1>

        <p className="mt-2.5 text-center text-[13px] leading-relaxed text-white/60">
          Choose a display name for this session.
          <br />
          It only exists until you close this tab.
        </p>

        {/* Input: Transparent Glass Cutout */}
        <input
          ref={inputRef}
          type="text"
          maxLength={20}
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleContinue();
            }
          }}
          className="
            mt-7
            h-12
            w-full
            rounded-full
            border
            border-white/[0.1]
            bg-black/[0.2]
            backdrop-blur-md
            px-5
            text-[14px]
            text-white
            placeholder-white/30
            outline-none
            transition-all
            focus:border-white/[0.25]
            focus:bg-black/[0.3]
          "
        />

        {/* Continue: Premium Glass Action Button */}
        <button
          onClick={handleContinue}
          disabled={!name.trim()}
          className="
            mt-5
            h-12
            w-full
            rounded-full
            bg-white/[0.08]
            text-[14px]
            font-medium
            text-white
            border
            border-white/[0.15]
            backdrop-blur-xl
            shadow-[0_4px_12px_rgba(0,0,0,0.2)]
            transition-all
            duration-300
            disabled:cursor-not-allowed
            disabled:opacity-20
            disabled:bg-white/[0.02]
            disabled:border-white/[0.05]
            enabled:hover:bg-white/[0.16]
            enabled:hover:border-white/[0.3]
            enabled:hover:shadow-[0_0_24px_rgba(255,255,255,0.08)]
          "
        >
          Continue
        </button>
      </div>
    </div>
  );
}
