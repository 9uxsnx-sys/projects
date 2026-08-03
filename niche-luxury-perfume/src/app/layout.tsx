import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Luxury Perfume House | Where Light Becomes Scent",
  description: "A niche luxury perfume house — faceted glass, gold, and oud. Editorial e-commerce experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
