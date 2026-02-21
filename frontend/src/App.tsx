import { useEffect } from "react";
import Home from "./pages/Home";
export default function App() {
  useEffect(() => {
  const hasVisited = localStorage.getItem("visited");

  if (!hasVisited) {
    fetch(`${import.meta.env.VITE_BACKEND_HOST}/new_user`, {
      method: "POST",
    });

    localStorage.setItem("visited", "true");
  }
}, []);
  return (
    <main className="flex flex-col gap-8 overflow-x-hidden">
      <Home />
    </main>
  );
}
