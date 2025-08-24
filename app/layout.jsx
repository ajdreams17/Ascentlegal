// app/layout.js
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Ascent Legal",
  description: "Modern Counsel for Ambitious Businesses",
  openGraph: {
    title: "Ascent Legal",
    description: "Modern Counsel for Ambitious Businesses",
    url: "https://68aa8d36f0303a000843dd33--aesthetic-rabanadas-aa1783.netlify.app/", // update to your live site URL
    siteName: "Ascent Legal",
    images: [
      {
        url: "/og-image.png", // save your mockup as og-image.png in /public
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
    images: ["/og-image.png"], // same image
  },
  // Optional but useful for Instagram/Yelp previews
  other: {
    "instagram:card": "summary_large_image",
    "yelp:card": "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
