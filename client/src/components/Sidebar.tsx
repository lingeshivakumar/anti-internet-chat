export default function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar-brand">

                <h1>ANTI-INTERNET CHAT</h1>

                <p>
                    Offline • Secure • Peer-to-Peer
                </p>

            </div>

            <div className="sidebar-search">

                <input
                    type="text"
                    placeholder="Search conversations..."
                />

            </div>

            <section className="conversation-section">

                <span className="section-title">
                    Conversations
                </span>

                <div className="empty-state">

                    <div className="empty-icon">
                        💬
                    </div>

                    <h3>No conversations yet</h3>

                    <p>
                        Discover nearby devices to
                        start chatting securely.
                    </p>

                    <button>

                        Discover Devices

                    </button>

                </div>

            </section>

            <footer className="sidebar-footer">

                <div className="device-avatar">
                    L
                </div>

                <div>

                    <h4>Lingesh</h4>

                    <p>This Device</p>

                </div>

            </footer>

        </aside>
    );
}