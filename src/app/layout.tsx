import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/Navbar/Navbar";
import Footer from "@/app/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopping Shop",
  description: "Your one stop for shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      <main className="p-4 max-w-7xl mx-auto min-w-[300px]">
        {children}
      </main>
      <Footer/>
      </body>
    </html>
  );
}
