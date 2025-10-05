import { useEffect } from "react"

type SeoProps = {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  og?: {
    title?: string
    description?: string
    image?: string
    type?: string
    url?: string
    siteName?: string
    locale?: string
  }
  twitter?: {
    card?: "summary" | "summary_large_image"
    title?: string
    description?: string
    image?: string
  }
  noindex?: boolean
  jsonLd?: Record<string, any>[] | Record<string, any>
}

function upsertMeta(attr: "name" | "property", key: string, content?: string) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}='${key}']`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

function upsertLink(rel: string, href?: string) {
  if (!href) return
  let el = document.head.querySelector(`link[rel='${rel}']`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", rel)
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

function upsertJsonLd(id: string, data?: Record<string, any> | Record<string, any>[]) {
  const existing = document.getElementById(id)
  if (existing) existing.remove()
  if (!data) return
  const script = document.createElement("script")
  script.type = "application/ld+json"
  script.id = id
  script.text = JSON.stringify(data)
  document.head.appendChild(script)
}

export default function Seo({ title, description, keywords, canonical, og, twitter, noindex, jsonLd }: SeoProps) {
  useEffect(() => {
    const currentUrl = typeof window !== "undefined" ? window.location.href : undefined

    if (title) document.title = title
    if (description) upsertMeta("name", "description", description)
    if (keywords?.length) upsertMeta("name", "keywords", keywords.join(", "))

    // Robots
    upsertMeta("name", "robots", noindex ? "noindex,nofollow" : "index,follow")

    // Language
    upsertMeta("name", "language", "pt-br")

    // Canonical
    upsertLink("canonical", canonical || currentUrl)

    // Open Graph
    upsertMeta("property", "og:title", og?.title || title)
    upsertMeta("property", "og:description", og?.description || description)
    upsertMeta("property", "og:image", og?.image)
    upsertMeta("property", "og:type", og?.type || "website")
    upsertMeta("property", "og:url", og?.url || currentUrl)
    upsertMeta("property", "og:site_name", og?.siteName || "Jonathan da Cruz")
    upsertMeta("property", "og:locale", og?.locale || "pt_BR")

    // Twitter
    upsertMeta("name", "twitter:card", twitter?.card || "summary_large_image")
    upsertMeta("name", "twitter:title", twitter?.title || title)
    upsertMeta("name", "twitter:description", twitter?.description || description)
    upsertMeta("name", "twitter:image", twitter?.image)

    // JSON-LD
    upsertJsonLd("jsonld-seo", jsonLd)
  }, [title, description, keywords, canonical, og, twitter, noindex, jsonLd])

  return null
}