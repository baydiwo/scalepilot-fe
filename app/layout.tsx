import type { Metadata } from "next";
import { Instrument_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ScalePilot - Agentic Scaling Platform",
  description: "AI-powered scaling for your business operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSans.className} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${instrumentSans.className} ${instrumentSans.variable} min-h-full flex flex-col`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
