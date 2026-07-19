    import { useEffect, useRef, useState } from "react";
import { UserRound } from "lucide-react";

interface NameModalProps {
  onContinue: (name: string) => void;
}

export default function NameModal({
  onContinue,
}: NameModalProps) {
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
        bg-[#090D13]/80
        backdrop-blur-2xl
      "
    >
      {/* Ambient Glow */}

      <div
        className="
          pointer-events-none
          absolute
          h-[700px]
          w-[700px]
          rounded-full
          bg-[radial-gradient(circle,_rgba(56,100,255,0.20)_0%,_transparent_70%)]
          blur-3xl
        "
      />

      {/* Card */}

      <div
        className="
          relative
          w-[92%]
          max-w-md
          rounded-3xl
          border
          border-white/10
          bg-[#11161D]/80
          p-8
          backdrop-blur-2xl
          shadow-[0_25px_80px_rgba(0,0,0,0.55)]
        "
      >
        {/* Icon */}

        <div
          className="
            mx-auto
            mb-6
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-[#1A202B]
          "
        >
          <UserRound
            size={28}
            className="text-emerald-400"
          />
        </div>

        <h1
          className="
            text-center
            text-2xl
            font-bold
            text-white
          "
        >
          Welcome
        </h1>

        <p
          className="
            mt-3
            text-center
            text-sm
            leading-relaxed
            text-zinc-400
          "
        >
          Choose a display name for this session.
          <br />
          It will only exist until you close this tab.
        </p>

        {/* Input */}

        <input
          ref={inputRef}
          type="text"
          maxLength={20}
          value={name}
          placeholder="Display name"
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleContinue();
            }
          }}
          className="
            mt-8
            h-12
            w-full
            rounded-xl
            border
            border-white/10
            bg-[#1A202B]
            px-4
            text-white
            outline-none
            transition-all
            placeholder:text-zinc-500
            focus:border-emerald-400
          "
        />

        {/* Continue */}

        <button
          onClick={handleContinue}
          disabled={!name.trim()}
          className="
            mt-6
            h-12
            w-full
            rounded-xl
            bg-emerald-500
            text-sm
            font-semibold
            text-black
            transition-all
            hover:bg-emerald-400
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          Continue
        </button>
      </div>
    </div>
  );
}