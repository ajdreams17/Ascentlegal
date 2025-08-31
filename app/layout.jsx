// app/layout.js
import "./globals.css";
// Use ONE of these two imports depending on your setup:
// If you have a tsconfig/jsconfig with path alias "@/*":
// import Header from "@/components/Header";
// Otherwise, use a relative path from /app to /components:
import Header from "../components/Header";

import Footer from "../components/Footer";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
