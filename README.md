<<<<<<< HEAD
# neuro-chat_bot
chat_bot
=======
# NeuroChat Starter (Next.js + Tailwind)

A polished **NeuroChat-style** landing page with a **floating chatbot widget** and a **full chat page** that embeds your Streamlit bot. Built with **Next.js (App Router)**, **Tailwind**, **lucide-react**, and **framer-motion**.

## ✨ Features
- Dark neon gradient landing page
- Floating chat widget (bottom-right) on every page
- Local demo chat via `/api/echo` (swap with your real API)
- `/chat` page: left = local chat, right = Streamlit embed (configurable)
- Minimal shadcn-like UI components (no CLI required)

## 🛠️ Setup

```bash
npm install
# optional: set your Streamlit URL
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

## 📁 Structure
- `app/page.tsx` — Home (landing)
- `app/chat/page.tsx` — Chat + Streamlit iframe
- `components/FloatingChat.tsx` — Floating widget
- `components/ui/*` — Minimal UI primitives
- `app/api/echo/route.ts` — Simple echo endpoint

## 🔌 Swap to a real LLM
Replace `/api/echo/route.ts` with your preferred provider code (OpenAI/HF/etc.) and forward messages from the widget/page.

## 🚀 Deploy
- Works great on **Netlify**, **Vercel**, or **Render**.
- Ensure `NEXT_PUBLIC_STREAMLIT_URL` is configured in environment variables.
>>>>>>> 85e2c0e (Initial commit - neurochat starter)
