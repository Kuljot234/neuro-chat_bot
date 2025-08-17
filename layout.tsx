import type { Metadata } from "next";
import "../styles/globals.css";
import { FloatingChat } from "@/components/FloatingChat";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "NeuroChat",
  description: "AI-Powered Conversations",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Navbar />
        {children}
        <FloatingChat />
      </body>
    </html>
  );
}