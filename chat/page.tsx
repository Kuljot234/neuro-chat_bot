"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, Send, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const STREAMLIT_URL = process.env.NEXT_PUBLIC_STREAMLIT_URL || "https://chatbot-app-mbjgejqda5zyzh3xjra7ss.streamlit.app/";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: "Hi! I am your local demo bot. Ask me anything." }]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  async function send() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", content: text }]);
    const res = await fetch("/api/echo", { method: "POST", body: JSON.stringify({ message: text }) });
    const data = await res.json();
    setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
  }

  return (
    <main className="container-hero py-8 grid lg:grid-cols-2 gap-6">
      <Card className="card-base h-[75vh] flex flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><Bot className="w-5 h-5" /> Local Chat (Demo)</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <div ref={listRef} className="flex-1 overflow-y-auto pr-1 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`max-w-[85%] rounded-2xl px-4 py-2 ${m.role === "user" ? "ml-auto bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]" : "bg-muted/60 border"}`}>
                {m.content}
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <Input
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
            />
            <button onClick={send} className="rounded-2xl px-4 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90 transition flex items-center gap-2">
              <Send className="w-4 h-4" /> Send
            </button>
          </div>
        </CardContent>
      </Card>

      <Card className="card-base h-[75vh] flex flex-col overflow-hidden">
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle>Embedded Streamlit</CardTitle>
          <Link href={STREAMLIT_URL} target="_blank" className="text-sm underline inline-flex items-center gap-1">
            Open Streamlit <ExternalLink className="w-3 h-3" />
          </Link>
        </CardHeader>
        <CardContent className="p-0 flex-1">
          <iframe src={STREAMLIT_URL} className="w-full h-full rounded-b-2xl border-0" />
        </CardContent>
      </Card>
    </main>
  );
}

{/* Embedded Streamlit chatbot iframe */}
<div className="mt-6 w-full flex justify-center">
  <iframe
    src="https://chatbot-app-mbjgejqda5zyzh3xjra7ss.streamlit.app/"
    width="100%"
    height="600"
    className="rounded-2xl shadow-lg border border-gray-200"
  ></iframe>
</div>
