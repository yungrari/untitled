import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils"
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "%PROJECT_TITLE%",
  description: "%PROJECT_DESCRIPTION%",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >{children}</body>
    </html>
  );
}
