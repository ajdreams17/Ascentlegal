import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "Ascent Legal",
  description: "Modern Counsel for Ambitious Businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
        <Script
  id="trustpilot-script"
  strategy="afterInteractive"
  src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
/Script>
      </body>
    </html>
  );
}
