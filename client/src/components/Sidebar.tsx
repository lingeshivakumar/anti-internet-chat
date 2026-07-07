import {
  MessageCircleMore,
  Search,
  Circle,
} from "lucide-react";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
}

interface SidebarProps {
  userName: string;
  deviceName: string;
}

export default function Sidebar({
  userName,
  deviceName,
}: SidebarProps) {
  return (
    <div className="relative h-full">
      {/* Ambient Glow — radiates from behind the card, spilling to the left */}
      <div
        className="pointer-events-none absolute top-1/2 h-[700px] w-[560px] -translate-y-1/2 opacity-90 blur-[110px]"
        style={{
          right: "-40px",
          background:
            "radial-gradient(circle at right center, red 0%, red 28%, red 52%, transparent 10%)",
        }}
      />

      <aside className="relative flex h-full flex-col overflow-hidden rounded-[30px] bg-[#ef4444]/15">
      {/* Header */}
      <header className="relative px-8 pt-8">
        <p className="text-sm text-white-500">
          {getGreeting()}
        </p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-white">
          {userName}
        </h1>
      </header>

      {/* Search */}
      <div className="relative px-8 pt-8">
        <div
          className="
            flex
            h-12
            items-center
            gap-3
            rounded-2xl
            bg-[#1A202B]
            px-4
            transition-all
            duration-300
            focus-within:scale-[1.02]
            focus-within:bg-[#222938]
          "
        >
          <Search
            size={18}
            className="text-zinc-500"
          />
          <input
            placeholder="Search conversations..."
            className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-500 outline-none"
          />
        </div>
      </div>

      {/* Section Title */}
      <div className="relative px-8 pt-8">
        <p className="text-xs uppercase tracking-[0.2em] text-white-500">
          Conversations
        </p>
      </div>

      {/* Empty State */}
      <div className="relative -mt-10 flex flex-1 flex-col items-center justify-center px-8">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1A202B]">
          <MessageCircleMore
            size={34}
            className="text-zinc-500"
          />
        </div>
        <h2 className="mt-6 text-lg font-semibold text-white">
          No conversations
        </h2>
        <p className="mt-3 max-w-[190px] text-center text-sm leading-6 text-white-500">
          Nearby devices will appear here once discovered.
        </p>
      </div>

      {/* Footer */}
      <footer className="relative px-5 pb-5 pt-4">
        <div
          className="
            rounded-2xl
            bg-[#1A202B]
            p-4
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#232B39]">
          <div className="flex items-center gap-2">
            <Circle
              size={8}
              className="fill-red-400 text-red-400"
            />
            <span className="text-sm font-medium text-red-400">
              Offline
            </span>
          </div>
          <h3 className="mt-4 font-medium text-white">
            {userName}
          </h3>
          <p className="text-sm text-zinc-500">
            {deviceName}
          </p>
        </div>
      </footer>
      </aside>
    </div>
  );
}