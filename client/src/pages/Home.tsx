import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

export default function Home() {
  return (
    // Changed h-screen to overflow-hidden so the app scales without scrolling the body
    <main className="h-screen w-screen bg-[#0A0C10] p-0 md:p-5 overflow-hidden">
      <div 
        className="
          flex flex-col h-full w-full
          lg:grid lg:grid-cols-[290px_1fr] 
          gap-0 md:gap-5
        "
      >
        {/* On mobile, this will only take the exact height of its visible header */}
        <Sidebar
          userName="User"
          deviceName="Your device"
        />

        {/* On mobile, this will expand to fill 100% of the remaining vertical space */}
        <div className="flex-1 min-h-0">
          <ChatWindow />
        </div>
      </div>
    </main>
  );
}
