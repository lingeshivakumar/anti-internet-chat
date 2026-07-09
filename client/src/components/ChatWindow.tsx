import TopBar from "./TopBar";
import MessageInput from "./MessageInput";

export default function ChatWindow() {
  return (
    <section
      className="
        relative
        flex
        h-full
        w-full
        flex-col
        overflow-hidden
        rounded-none
        md:rounded-[30px]
        border-x-0
        border-y
        md:border
        border-white/5
        bg-[#11161D]/60
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,0.45)]
      "
    >
      {/* Neon Leak — scaled down on mobile devices */}
      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-20
          md:-right-50
          md:-top-32
          z-0
          h-[800px]
          w-[900px]
          md:h-[760px]
          md:w-[860px]
          rounded-full
          bg-[radial-gradient(circle_at_center,_rgba(56,132,255,0.25)_0%,_rgba(56,132,255,0.08)_40%,_transparent_72%)]
          blur-2xl
          md:blur-3xl
        "
      />

      {/* Inner Highlight along the top edge */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-4
          md:inset-x-8
          top-0
          z-10
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />

      {/* Top Bar Area */}
      <div
        className="
          relative
          z-10
          shadow-[0_8px_30px_rgba(0,0,0,0.18)]
        "
      >
        <TopBar />
      </div>

      {/* Messages Scroll Area */}
      <div
        className="
          relative
          z-10
          flex-1
          overflow-y-auto
        "
      >
        {/* Top Fade */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            z-20
            h-8
            bg-gradient-to-b
            from-[#11161D]/60
            to-transparent
          "
        />

        {/* Bottom Fade */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-20
            h-8
            bg-gradient-to-t
            from-[#11161D]/60
            to-transparent
          "
        />
      </div>

      {/* Message Input Area — smaller height on mobile */}
      <div
        className="
          relative
          z-10
          h-[72px]
          md:h-[92px]
          border-t
          border-white/5
          flex
          items-center
          px-4
          md:px-6
        "
      >
        {/* Renders your custom input file layout while satisfying required attributes */}
        <div className="w-full">
          <MessageInput onSend={(text) => console.log(text)} disabled={false} />
        </div>
      </div>
    </section>
  );
}
