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
       
      </body>
    </html>
  );
}
