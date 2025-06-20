import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " چکاد  | معرفی کوه ها و سایت های سنگنوردی ایران",
  description: "  راهنمای قله ها و مسیر های سنگنوردی ایران  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className="min-h-screen"
          style={{
            backgroundColor: "#e1e7f0",
            direction: "rtl",
            fontFamily: "Tahoma, Arial, sans-serif",
          }}
        >
          <Navbar />
          {children}
          <Footer />
   
        </div>
      </body>
    </html>
  );
}
