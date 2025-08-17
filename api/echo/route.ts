import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json().catch(() => ({ message: "" }));
  const reply = `Echo: ${message}`;
  return NextResponse.json({ reply });
}