import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Zoul Capital | Private Family Investment Office | Spain",
  description:
    "Zoul Capital is a private family office managing investments in real estate, education, and innovative technologies with a focus on long-term value creation and generational wealth preservation.",
  keywords: [
    "family office",
    "private investment",
    "wealth management",
    "real estate investment",
    "educational investments",
    "Spain family office",
    "generational wealth",
    "private holding company",
  ],
  authors: [{ name: "Zoul Capital" }],
  creator: "Zoul Capital",
  publisher: "Zoul Capital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Zoul Capital | Private Family Investment Office",
    description:
      "Strategic investments in real estate, education, and innovative technologies for long-term value creation.",
    url: "https://zoul.capital",
    siteName: "Zoul Capital",
    images: [
      {
        url: "https://zoul.capital/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zoul Capital - Private Family Office",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoul Capital | Private Family Investment Office",
    description: "Strategic investments in real estate, education, and innovative technologies.",
    images: ["https://zoul.capital/twitter-image.jpg"],
    creator: "@zoulcapital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual code when available
  },
  category: "Finance",
}

export default function Home() {
  return <ClientPage />
}

