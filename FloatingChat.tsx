"use client";

import { Bot } from "lucide-react";

export function FloatingChat() {
  return (
    <div className="fixed right-4 bottom-4 z-40">
      {/* Floating Action Button (FAB) */}
      <a
        href="https://chatbot-app-mbjgejqda5zyzh3xjra7ss.streamlit.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full h-14 w-14 shadow-soft bg-gradient-to-br from-fuchsia-500 to-sky-500 text-white flex items-center justify-center animate-[pulse_3s_ease-in-out_infinite]"
        aria-label="Open chat"
        title="Open chat"
      >
        <Bot className="w-7 h-7" />
      </a>
    </div>
  );
}
