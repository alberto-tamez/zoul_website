export interface EmailService {
  sendEmail(data: EmailData): Promise<void>
}

export interface EmailData {
  name: string
  email: string
  message: string
}

// Dummy implementation that just logs the email
export class DummyEmailService implements EmailService {
  async sendEmail(data: EmailData): Promise<void> {
    console.log("=== New Contact Form Submission ===")
    console.log("From:", data.name)
    console.log("Email:", data.email)
    console.log("Message:", data.message)
    console.log("================================")

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500))
  }
}

// Singleton instance for use throughout the app
export const emailService = new DummyEmailService()

