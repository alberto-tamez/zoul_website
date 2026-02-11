import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function Careers() {
  return (
    <div className="min-h-screen bg-background-light py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zoul%20(2)-FStLOd3KoWvG8VWrwNiqVHUnwA2aWx.png"
            alt="Zoul Capital Logo"
            width={64}
            height={64}
            className="mx-auto rounded"
          />
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold text-background-dark mb-4">Be Part of Our Team</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                  Resume/CV
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark"
                  required
                />
              </div>
              <div>
                <label htmlFor="languages" className="block text-sm font-medium text-gray-700">
                  Languages Spoken
                </label>
                <select
                  multiple
                  id="languages"
                  name="languages"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                >
                  <option value="spanish">Spanish</option>
                  <option value="english">English</option>
                  <option value="valencian">Valencian</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="workAuth" className="block text-sm font-medium text-gray-700">
                  Work Authorization
                </label>
                <select
                  id="workAuth"
                  name="workAuth"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                  required
                >
                  <option value="">Select authorization status</option>
                  <option value="eu">EU Citizen</option>
                  <option value="spain">Spanish Work Permit</option>
                  <option value="need">Will need sponsorship</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Why do you want to work with Zoul Capital?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary focus:border-primary"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Send Application
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary-dark">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

