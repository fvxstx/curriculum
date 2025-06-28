import type { Metadata } from "next";
import "./globals.css";
import "../../../public/css/supreme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Fausto Torres",
  description: "Criado por Fausto Torres",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`overflow-x-hidden antialiased flex items-center flex-col relative justify-between min-h-screen h-full w-screen font-supreme bg-background text-foreground`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <ToastContainer
          autoClose={3000}
          position="top-right"
          hideProgressBar={true}
          closeOnClick
        />
      </body>
    </html>
  );
}
