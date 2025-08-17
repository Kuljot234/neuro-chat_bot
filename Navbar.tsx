"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b bg-[hsl(var(--background))]/70 backdrop-blur">
      <div className="container-hero flex items-center h-14 justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-sky-500">🤖</span>
          <span>NeuroChat</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="opacity-90 hover:opacity-100">Home</Link>

          {/* Updated Chat link to open Streamlit chatbot in a new tab */}
          <a
            href="https://chatbot-app-mbjgejqda5zyzh3xjra7ss.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-90 hover:opacity-100"
          >
            Chat
          </a>

          <a
            href="https://v0.app/chat/b/b_oXqsmO2cPMU"
            target="_blank"
            className="opacity-90 hover:opacity-100"
          >
            Design Ref
          </a>
        </nav>
      </div>
    </header>
  );
}
