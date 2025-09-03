// app/layout.js
import "./globals.css";
import Script from "next/script";
import { Suspense } from "react";       // ← add this
import Header from "../components/Header";
import Footer from "../components/Footer";
import GA from "../components/GA";

// app/layout.jsx
export const metadata = {
  metadataBase: new URL("https://ascentlegal.io"),
  robots: {
    index: true,
    follow: true,
  },

  title: "Ascent Legal",
  description: "Modern Counsel for Ambitious Businesses",
  openGraph: {
    title: "Ascent Legal",
    description: "Modern Counsel for Ambitious Businesses",
    url: "/",
    siteName: "Ascent Legal",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ascent Legal - Modern Counsel for Ambitious Businesses" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ascent Legal",
    description: "Modern Counsel for Ambitious Businesses",
    images: ["/og-image.png"],
  },
  other: {
    "instagram:card": "summary_large_image",
    "yelp:card": "summary_large_image",
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
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

        {/* Wrap any component that uses useSearchParams in Suspense */}
        {GA_ID && (
          <Suspense fallback={null}>
            <GA />
          </Suspense>
        )}
      </body>
    </html>
  );
}
