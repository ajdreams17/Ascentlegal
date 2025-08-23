import "./globals.css";
import Nav from "./components/Nav";       // path is case-sensitive
import Footer from "./components/Footer"; // make sure file exists

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
      </body>
    </html>
  );
}
