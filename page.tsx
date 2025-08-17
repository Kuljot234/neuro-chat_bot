"use client";

import { motion } from "framer-motion";
import { Bot, ShieldCheck, Globe2, Zap } from "lucide-react";
// Removed Link import since we won't use Next.js internal routing here
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const features = [
    { icon: <Bot className="w-6 h-6" />, title: "AI-Powered Chat", desc: "Engage with advanced AI models through our seamless chat interface." },
    { icon: <Zap className="w-6 h-6" />, title: "Real-time Updates", desc: "Experience instant message delivery with live streaming." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Secure & Private", desc: "Your conversations are protected with enterprise-grade security." },
    { icon: <Globe2 className="w-6 h-6" />, title: "Global Network", desc: "Connect with AI from anywhere with our distributed infra." },
  ];

  return (
    <main className="py-12">
      <section className="container-hero pt-8 md:pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400 bg-clip-text text-transparent"
        >
          Welcome to the Future of AI Chat
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-center text-muted-foreground max-w-3xl mx-auto"
        >
          Experience next-generation conversations with our advanced AI platform. Powered by cutting-edge technology and designed for seamless interactions.
        </motion.p>

        <div className="mt-8 flex justify-center">
          {/* Changed Start chatting button to external link */}
          <a
            href="https://chatbot-app-mbjgejqda5zyzh3xjra7ss.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-2xl px-5 py-3 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-medium shadow-soft hover:opacity-90 transition"
          >
            Start chatting
          </a>
        </div>
      </section>

      <section className="container-hero mt-12 grid sm:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
            <Card className="card-base">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="p-3 rounded-xl bg-muted">{f.icon}</div>
                <CardTitle>{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{f.desc}</CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <section className="container-hero mt-16">
        <div className="card-base p-8 text-center">
          <div className="text-5xl mb-4">🤖</div>
          <h3 className="text-2xl font-semibold">Ready to Start Chatting?</h3>
          <p className="text-muted-foreground mt-2">Click the bubble in the bottom-right or open the full chat page.</p>
          <div className="mt-6">
            {/* Changed Go to Chat button to external link */}
            <a
              href="https://chatbot-app-mbjgejqda5zyzh3xjra7ss.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-2xl px-5 py-3 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] font-medium shadow-soft hover:opacity-90 transition"
            >
              Go to Chat
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
