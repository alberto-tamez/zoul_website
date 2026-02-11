import { NextResponse } from "next/server"
import { emailService } from "@/lib/email-service"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    await emailService.sendEmail(data)
    return NextResponse.json({ message: "Message received successfully" }, { status: 200 })
  } catch (error) {
    console.error("Failed to process message:", error)
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
  }
}

