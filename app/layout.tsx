import type { Metadata } from "next";
import { Instrument_Sans, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://www.scalepilot.id"),
  title: "ScalePilot | Decision Engine for Meta Ads",
  description: "ScalePilot is the real-time verdict engine for Meta Ads. Scale winners instantly and stop losers before they burn your profits.",
  icons: {
    icon: "/scalepilot.svg",
  },
  openGraph: {
    title: "ScalePilot | Decision Engine for Meta Ads",
    description: "ScalePilot is the real-time verdict engine for Meta Ads. Scale winners instantly and stop losers before they burn your profits.",
    url: "https://www.scalepilot.id",
    siteName: "ScalePilot",
    images: [
      {
        url: "/scalepilot.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScalePilot | Decision Engine for Meta Ads",
    description: "ScalePilot is the real-time verdict engine for Meta Ads. Scale winners instantly and stop losers before they burn your profits.",
    images: ["/scalepilot.png"],
  },
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
        <Providers>
          {children}
        </Providers>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-JGCXHK9PCR`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-JGCXHK9PCR');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={\`https://www.facebook.com/tr?id=\${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1\`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
