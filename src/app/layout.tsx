import type { Metadata } from "next";
import "./globals.css";
import "../../public//css/supreme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        className={` antialiased flex items-center flex-col relative justify-between min-h-screen h-full w-screen font-supreme bg-background text-foreground`}
      >
        {children}
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
