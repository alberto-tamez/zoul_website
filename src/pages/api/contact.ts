import type { APIRoute } from "astro";

interface EmailData {
  name: string;
  email: string;
  message: string;
}

async function sendEmail(data: EmailData): Promise<void> {
  // Placeholder implementation. Replace with provider SDK when ready.
  console.log("=== New Contact Form Submission ===");
  console.log("From:", data.name);
  console.log("Email:", data.email);
  console.log("Message:", data.message);
  console.log("================================");
  await new Promise((resolve) => setTimeout(resolve, 500));
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = (await request.json()) as EmailData;
    await sendEmail(data);
    return new Response(JSON.stringify({ message: "Message received successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to process message:", error);
    return new Response(JSON.stringify({ error: "Failed to process message" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
