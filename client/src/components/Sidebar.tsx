export default function Sidebar() {
    return (
        <aside className="flex w-[290px] flex-col rounded-[28px] border border-white/5 bg-zinc-900 shadow-2xl">

            {/* Header */}

            <div className="px-6 pt-6">

                <h1 className="text-xs font-bold tracking-[0.28em] text-white uppercase">
                    Anti-Internet Chat
                </h1>

                <p className="mt-2 text-sm text-zinc-400">
                    Offline • Secure • Peer-to-Peer
                </p>

            </div>

            {/* Search */}

            <div className="px-6 pt-6">

                <input
                    type="text"
                    placeholder="Search conversations..."
                    className="
                        h-12
                        w-full
                        rounded-2xl
                        border
                        border-white/5
                        bg-zinc-800
                        px-4
                        text-sm
                        text-white
                        placeholder:text-zinc-500
                        outline-none
                        transition
                        focus:border-blue-500
                    "
                />

            </div>

            {/* Conversation Area */}

            <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">

                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-800 text-4xl">

                    💬

                </div>

                <h2 className="text-lg font-semibold text-white">

                    No conversations yet

                </h2>

                <p className="mt-3 text-sm leading-6 text-zinc-400">

                    Discover nearby devices to begin chatting securely.

                </p>

            </div>

            {/* Footer */}

            <footer className="flex items-center gap-4 border-t border-white/5 p-6">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 font-semibold text-white">

                    L

                </div>

                <div>

                    <p className="font-medium text-white">

                        Lingesh

                    </p>

                    <p className="text-sm text-zinc-400">

                        This Device

                    </p>

                </div>

            </footer>

        </aside>
    );
}