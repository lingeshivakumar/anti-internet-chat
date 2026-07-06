import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0C10] p-5">
      <div className="grid h-[calc(100vh-40px)] grid-cols-[290px_1fr] gap-5">
        <Sidebar
          userName="Lingesh"
          deviceName="MacBook Air M2"
        />

        <section className="rounded-[30px] bg-[#13161D]" />
      </div>
    </main>
  );
}