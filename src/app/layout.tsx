import type { Metadata } from "next";
import { Hind } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const hind = Hind({ subsets: ["devanagari"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Sejuti Online Dot Com",
  description: "Your trusted partner in the online world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={hind.className}>
        <div className="container mx-auto">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
