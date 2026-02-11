"use client"

import Head from "next/head"
import { useRouter } from "next/router"

interface PageSEOProps {
  title: string
  description: string
  canonicalPath?: string
  ogImage?: string
  ogType?: "website" | "article"
  twitterCard?: "summary" | "summary_large_image" | "app" | "player"
  noIndex?: boolean
}

export function PageSEO({
  title,
  description,
  canonicalPath,
  ogImage = "/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false,
}: PageSEOProps) {
  const router = useRouter()
  const url = `https://zoul.capital${canonicalPath || router.asPath}`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://zoul.capital${ogImage}`} />
      <meta property="og:site_name" content="Zoul Capital" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://zoul.capital${ogImage}`} />

      {/* No index if specified */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </Head>
  )
}

