import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fausto Torres",
  description: "Criado por Fausto Torres",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
