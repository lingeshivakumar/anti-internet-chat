import Sidebar from "../components/Sidebar";

export default function Home() {
    return (
        <main className="min-h-screen bg-zinc-950 p-5">
            <div className="flex h-[calc(100vh-40px)] gap-5">

                <Sidebar />

                <section className="flex-1 rounded-[28px] border border-white/5 bg-zinc-900 shadow-2xl" />

            </div>
        </main>
    );
}