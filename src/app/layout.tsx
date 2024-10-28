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
      <body
        className={` antialiased flex items-start flex-col relative justify-between min-h-screen h-full w-screen font-rubick bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
