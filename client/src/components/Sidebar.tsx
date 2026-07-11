import { useState } from "react";
import {
  MessageCircleMore,
  Search,
  Circle,
  Menu,
  X,
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Outer container is h-auto on mobile so it collapses completely when closed
    <div className="relative h-auto lg:h-full w-full lg:w-auto">
      
      {/* Mobile Header Bar — Fixed height, acts as the persistent top nav on mobile */}
      <div className="flex h-16 items-center justify-between bg-[#1A202B] px-6 lg:hidden">
        <div className="flex items-center gap-2">
          <Circle size={8} className="fill-red-400 text-red-400" />
          <span className="text-sm font-medium text-white">{userName}</span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-white hover:bg-zinc-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Ambient Glow */}
      <div
        className="pointer-events-none absolute top-1/2 h-[400px] w-[300px] md:h-[740px] md:w-[900px] -translate-y-1/2 opacity-70 blur-[100px] md:blur-[170px]"
        style={{
          right: "-40px",
          background:
            "radial-gradient(circle at right center, red 0%, red 28%, red 52%, transparent 20%)",
        }}
      />

      {/* Main Sidebar Wrapper */}
      <aside 
        className={`
          ${isOpen ? "flex" : "hidden"} 
          lg:flex 
          fixed lg:relative 
          inset-x-0 bottom-0 top-16 lg:top-0 
          z-50 lg:z-auto 
          h-[calc(100vh-64px)] lg:h-full 
          w-full flex-col overflow-y-auto lg:overflow-hidden 
          rounded-none lg:rounded-[30px] 
          bg-[#111622] lg:bg-[#ef4444]/15
          backdrop-blur-md lg:backdrop-blur-none
          transition-all duration-300
        `}
      >
        {/* Header */}
        <header className="relative px-6 pt-6 lg:px-8 lg:pt-8">
          <p className="text-sm text-zinc-400">
            {getGreeting()}
          </p>
          <h1 className="mt-1 text-2xl lg:text-3xl font-semibold tracking-tight text-white">
            {userName}
          </h1>
        </header>

        {/* Search Bar with Apple Glass Effect */}
        <div className="relative px-6 pt-6 lg:px-8 lg:pt-8 w-full">
          <div className="flex h-12 w-full items-center gap-3 rounded-xl bg-white/10 px-4 border border-white/20 backdrop-blur-md shadow-lg transition-all duration-300 focus-within:scale-[1.02] focus-within:bg-white/15">
            <Search
              size={18}
              className="text-zinc-300"
            />
            <input 
              placeholder="Search conversations..." 
              className="flex-1 bg-transparent text-sm text-white placeholder:text-zinc-400 outline-none w-full" 
            />
          </div>
        </div>

        {/* Section Title */}
        <div className="relative px-6 pt-6 lg:px-8 lg:pt-8">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
            Conversations
          </p>
        </div>

        {/* Empty State */}
        <div className="relative my-auto flex flex-col items-center justify-center px-6 py-12 lg:px-8 lg:py-0">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1A202B]">
            <MessageCircleMore
              size={34}
              className="text-zinc-500"
            />
          </div>
          <h2 className="mt-6 text-lg font-semibold text-white">
            No conversations
          </h2>
          <p className="mt-3 max-w-[190px] text-center text-sm leading-6 text-zinc-400">
            Nearby devices will appear here once discovered.
          </p>
        </div>

        {/* Footer */}
        <footer className="relative px-5 pb-5 pt-4 mt-auto">
            <div
              className="
                rounded-2xl
                bg-white/10
                p-4
                border 
                border-white/20 
                backdrop-blur-md 
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/15"
            >
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
              <p className="text-sm text-zinc-300">
                {deviceName}
              </p>
            </div>
          </footer>

      </aside>
    </div>
  );
}
