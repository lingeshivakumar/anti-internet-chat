import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0C10] p-5">
      <div className="grid h-[calc(100vh-40px)] grid-cols-[290px_1fr] gap-5">
        <Sidebar
          userName="User"
          deviceName="Your devices"
        />

        <ChatWindow />
      </div>
    </main>
  );
}