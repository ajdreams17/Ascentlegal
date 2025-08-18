import "./globals.css";
import Nav from "../components/Nav";      // <-- changed
import Footer from "../components/Footer"; // <-- changed

export const metadata = {
  title: "Ascent Legal",
  description: "Modern counsel for ambitious businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
