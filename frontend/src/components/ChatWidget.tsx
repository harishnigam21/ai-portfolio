import { useState } from "react";

import ChatWindow from "./ChatWindow";
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-blue-600 text-white shadow-xl flex items-center justify-center text-xl hover:scale-110 transition cursor-pointer open-ai-chat-btn"
        >
          💬
        </button>
      )}

      {/* Chat Window */}
      {isOpen && <ChatWindow setIsOpen={setIsOpen}/>}
    </>
  );
};

export default ChatWidget;
