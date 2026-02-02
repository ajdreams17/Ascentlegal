// app/layout.js
import "./globals.css";
import Script from "next/script";
import { Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GA from "../components/GA";

export const metadata = {
  metadataBase: new URL("https://ascentlegal.io"),
  robots: {
    index: true,
    follow: true,
  },

  // ✅ Default canonical for the root. Individual pages can override.
  alternates: {
    canonical: "/",
  },

  title: {
    default: "Ascent Legal | Business-First Entertainment & IP Counsel",
    template: "%s | Ascent Legal",
  },
  description:
    "Business-first, plain-English counsel for creators, studios, and growing companies. Brand deals, trademarks, copyright, licensing, and commercial contracts. Transactional counsel only (no litigation).",

  openGraph: {
    title: "Ascent Legal | Business-First Entertainment & IP Counsel",
    description:
      "Business-first, plain-English counsel for creators, studios, and growing companies. Brand deals, trademarks, copyright, licensing, and commercial contracts. Transactional counsel only (no litigation).",
    url: "/",
    siteName: "Ascent Legal",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ascent Legal",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ascent Legal | Business-First Entertainment & IP Counsel",
    description:
      "Business-first, plain-English counsel for creators, studios, and growing companies. Transactional counsel only (no litigation).",
    images: ["/og-image.png"],
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LegalService"],
    name: "Ascent Legal",
    url: "https://ascentlegal.io",
    logo: "https://ascentlegal.io/logo.png", // ✅ make sure this exists
    image: "https://ascentlegal.io/og-image.png",
    description:
      "Business-first, plain-English counsel for creators, studios, and growing companies. Brand deals, trademarks, copyright, licensing, and commercial contracts. Transactional counsel only (no litigation).",
    areaServed: "US",
    sameAs: [
      // Add your real profiles if you have them
      // "https://www.linkedin.com/company/...",
      // "https://www.instagram.com/...",
    ],
    // Optional: add phone/address if you want local SEO
    // telephone: "+1-XXX-XXX-XXXX",
    // address: { "@type": "PostalAddress", addressLocality: "Los Angeles", addressRegion: "CA", addressCountry: "US" },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ascent Legal",
    url: "https://ascentlegal.io",
  };

  return (
    <html lang="en">
      <body className="antialiased">
        {/* ✅ Structured data (sitewide) */}
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { send_page_view: false, anonymize_ip: true });
              `}
            </Script>
          </>
        )}

        <Header />
        {children}
        <Footer />

        {GA_ID && (
          <Suspense fallback={null}>
            <GA />
          </Suspense>
        )}
      </body>
    </html>
  );
}
