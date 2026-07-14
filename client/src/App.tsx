import { useEffect } from "react";
import Home from "./pages/Home";
import { socket } from "./services/socket";

export default function App() {

  useEffect(() => {

    socket.connect();

    return () => {
      socket.disconnect();
    };

  }, []);

  return <Home />;

}