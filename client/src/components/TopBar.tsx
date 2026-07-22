import {
  ShieldCheck,
  MoreHorizontal,
  Users,
} from "lucide-react";

import type { ConnectedUser } from "../services/chat.service";

interface TopBarProps {
  users?: ConnectedUser[];
}

export default function TopBar({
  users = [],
}: TopBarProps) {
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
      <div className="flex min-w-0 items-center gap-4">
        {/* Icon */}
        <div
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#1A202B]
          "
        >
          <Users
            size={18}
            className="text-emerald-400"
          />
        </div>

        {/* Title */}
        <div className="min-w-0">
          <h2
            className="
              text-lg
              font-semibold
              text-white
            "
          >
            Active Users ({users.length})
          </h2>

          {/* User Pills */}
          <div className="mt-2 flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {users.length === 0 ? (
              <span className="text-xs text-zinc-500">
                No users online
              </span>
            ) : (
              users.map((user) => (
                <div
                  key={user.socketId}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#1A202B]
                    px-3
                    py-1.5
                    transition-all
                    duration-300
                    hover:bg-[#232B39]
                  "
                >
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />

                  <span
                    className="
                      whitespace-nowrap
                      text-xs
                      font-medium
                      text-zinc-300
                    "
                  >
                    {user.username}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Right */}
      <div
        className="
          flex
          shrink-0
          items-center
          gap-3
        "
      >
        {/* Encryption Badge */}
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

        {/* Menu */}
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
            hover:rotate-360
            hover:bg-[#232B39]
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