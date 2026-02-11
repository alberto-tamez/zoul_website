import type { Metadata } from "next"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Contact Zoul Capital | Private Family Investment Office",
  description:
    "Get in touch with Zoul Capital for inquiries about our investment strategies in real estate, education, and innovative technologies. Connect with our family office in Spain.",
  keywords: [
    "contact family office",
    "investment inquiries",
    "Zoul Capital contact",
    "Spain family office contact",
    "private investment inquiries",
  ],
  openGraph: {
    title: "Contact Zoul Capital | Private Family Investment Office",
    description: "Get in touch with Zoul Capital for investment inquiries and partnership opportunities.",
    url: "https://zoul.capital/contact",
    siteName: "Zoul Capital",
    images: [
      {
        url: "https://zoul.capital/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Zoul Capital",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Zoul Capital | Private Family Investment Office",
    description: "Get in touch with Zoul Capital for investment inquiries and partnership opportunities.",
    images: ["https://zoul.capital/contact-twitter-image.jpg"],
  },
}

export default function Contact() {
  return <ContactClient />
}

