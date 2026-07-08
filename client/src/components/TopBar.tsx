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
        h-[72px]
        items-center
        justify-between
        px-8
      "
    >
      {/* Left */}

      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-[#1A202B]
          "
        >
          <BluetoothSearching
            size={20}
            className="text-red-400"
          />
        </div>

        <div>

          <h2
            className="
              text-lg
              font-semibold
              text-white
            "
          >
            No Device Connected
          </h2>

          <p
            className="
              text-sm
              text-zinc-500
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
          gap-3
        "
      >

        <div
          className="
            flex
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
            h-10
            w-10
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