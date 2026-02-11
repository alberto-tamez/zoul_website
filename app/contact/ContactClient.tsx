"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ContactClient() {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement("script")
    script.src = "//embed.typeform.com/next/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-muted py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
        <div className="bg-background rounded-lg shadow-md overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4 text-center">Contact Us</h2>
            <p className="text-muted-foreground text-center mb-8">
              Zoul Capital operates exclusively for the Tamez Gonzalez family. For internal inquiries or professional
              partnerships aligned with our areas of focus, please complete the form below.
            </p>
            <div data-tf-live="01JMZM5QKMX39HSJ5NPN767K78" className="min-h-[600px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

