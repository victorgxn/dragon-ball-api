import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dragon Ball Explorer",
  description:
    "Explora el universo de Dragon Ball y descubre información sobre tus personajes favoritos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="m-0 p-0">
      <body
        className={`${geistSans.variable} ${geistMono.variable}flex min-h-screen flex-col bg-orange-50`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
