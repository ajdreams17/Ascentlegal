// app/layout.js
import "./globals.css";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GA from "../components/GA"; // pageview tracker (client component below)

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://aesthetic-rabanadas-aa1783.netlify.app"
  ),
  title: "Ascent Legal",
  description: "Modern Counsel for Ambitious Businesses",
  openGraph: {
    title: "Ascent Legal",
    description: "Modern Counsel for Ambitious Businesses",
    url: "/",
    siteName: "Ascent Legal",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ascent Legal - Modern Counsel for Ambitious Businesses",
      },
    ],
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

const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // <-- must exist in Netlify env

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* GA4 scripts (only render if an ID is set) */}
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
                // We'll send page_view manually on route changes to avoid duplicates
                gtag('config', '${GA_ID}', { send_page_view: false, anonymize_ip: true });
              `}
            </Script>
          </>
        )}

        <Header />
        {children}
        <Footer />

        {/* Tracks page_view on client-side navigation (App Router) */}
        {GA_ID && <GA />}
      </body>
    </html>
  );
}
