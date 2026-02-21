import axios from "axios";
import type { Message } from "../types/chat";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_HOST}`,
});

export const sendMessage = async (messages: Message[]) => {
  const response = await API.post("/api/chat", {
    messages: messages,
  });

  return response.data;
};