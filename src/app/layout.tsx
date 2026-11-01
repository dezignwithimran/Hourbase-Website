import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hourbase — Track your time. Know your worth.",
  description:
    "Hourbase makes it simple to track billable hours, manage projects, and understand exactly where your time and income go.",
};

export const viewport: Viewport = {
  themeColor: "#f8fafc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen overflow-x-clip bg-slate-50 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
