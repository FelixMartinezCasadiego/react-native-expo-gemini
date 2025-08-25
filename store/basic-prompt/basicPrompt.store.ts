import { Message } from "@/interfaces/chat.interfaces";
import { create } from "zustand";

interface BasicPromptSate {
  geminiWriting: boolean;
  messages: Message[];
  addMessage: (text: string) => void;
  setGeminiWriting: (isWriting: boolean) => void;
}

const useBasicPrompt = create<BasicPromptSate>()((set) => ({
  // State
  geminiWriting: false,
  messages: [],

  // Actions
  addMessage: (text: string) => {
    // TODO:
  },
  setGeminiWriting: (isWriting: boolean) => set({ geminiWriting: isWriting }),
}));
