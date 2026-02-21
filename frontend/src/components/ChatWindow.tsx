import { sendMessage } from "../services/api";
import ReactMarkdown from "react-markdown";
import type { Message } from "../types/chat";
import { useEffect, useRef, useState } from "react";
interface ChatWindowProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ChatWindow({ setIsOpen }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!loading) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const data = await sendMessage(updatedMessages);

      const aiMessage: Message = {
        role: "assistant",
        content: data.reply,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="fixed bottom-5 right-5 max-w-96 h-125 bg-gray-900 text-white rounded-2xl shadow-2xl flex flex-col animate-fadeIn">
      {/* Header */}
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <span className="font-semibold">Chat with Harish 👋</span>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-white cursor-pointer"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 scroll-smooth">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-xl text-sm ${
                msg.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-200"
              }`}
            >
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
          </div>
        ))}

        {loading && (
          <div className="text-gray-400 text-sm animate-pulse">
            I’m thinking...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t border-gray-700 flex gap-2">
        <input
          className="flex-1 bg-gray-800 rounded-lg px-3 py-2 text-sm outline-none"
          placeholder="Ask about my skills..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-blue-600 px-4 rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </div>
    </div>
  );
}
