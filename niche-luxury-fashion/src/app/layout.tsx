import type { Metadata } from "next";
import "../styles/globals.css";
import CartWrapper from "@/components/cart/CartWrapper";

export const metadata: Metadata = {
  title: "VANTAGE | Luxury Fashion & Editorial Design",
  description: "A minimalist luxury fashion brand showcasing high-end editorial design and high-performance e-commerce architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <CartWrapper>{children}</CartWrapper>
      </body>
    </html>
  );
}
