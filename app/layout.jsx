import "./globals.css";

export const metadata = {
  title: "Ascent Legal",
  description: "Modern counsel for ambitious businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
