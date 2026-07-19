import { useEffect } from "react";

import Home from "./pages/Home";
import NameModal from "./components/NameModal";

import { socket } from "./services/socket";
import { useIdentity } from "./hooks/useIdentity";

export default function App() {
  const {
    hasIdentity,
    createIdentity,
  } = useIdentity();

  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  return hasIdentity ? (
    <Home />
  ) : (
    <NameModal
      onContinue={createIdentity}
    />
  );
}