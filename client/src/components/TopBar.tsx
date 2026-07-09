import {
  ShieldCheck,
  MoreHorizontal,
  BluetoothSearching,
} from "lucide-react";

export default function TopBar() {
  return (
    <header
      className="
        relative
        flex
        h-[64px]
        md:h-[72px]
        items-center
        justify-between
        px-4
        md:px-8
      "
    >
      {/* Left */}
      <div className="flex items-center gap-3 md:gap-4 min-w-0">
        <div
          className="
            flex
            h-9
            w-9
            md:h-11
            md:w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#1A202B]
          "
        >
          <BluetoothSearching
            size={18}
            className="text-red-400"
          />
        </div>

        <div className="min-w-0">
          <h2
            className="
              text-base
              md:text-lg
              font-semibold
              text-white
              truncate
            "
          >
            No Devices Found
          </h2>
          <p
            className="
              text-xs
              md:text-sm
              text-zinc-500
              truncate
            "
          >
            Discover nearby devices
          </p>
        </div>
      </div>

      {/* Right */}
      <div
        className="
          flex
          items-center
          gap-2
          md:gap-3
          shrink-0
        "
      >
        {/* Hidden on mobile to prevent text layout overlapping */}
        <div
          className="
            hidden
            sm:flex
            items-center
            gap-2
            rounded-full
            bg-[#1A202B]
            px-4
            py-2
          "
        >
          <ShieldCheck
            size={16}
            className="text-emerald-400"
          />
          <span
            className="
              text-sm
              text-zinc-300
            "
          >
            Encrypted
          </span>
        </div>

        <button
          className="
            flex
            h-9
            w-9
            md:h-10
            md:w-10
            items-center
            justify-center
            rounded-full
            bg-[#1A202B]
            transition-all
            duration-300
            hover:bg-[#232B39]
            hover:rotate-90
          "
        >
          <MoreHorizontal
            size={18}
            className="text-zinc-400"
          />
        </button>
      </div>
    </header>
  );
}
