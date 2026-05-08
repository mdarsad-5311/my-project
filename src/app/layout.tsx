import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "White Arrow Softwares — Precision Software Studio",
  description: "Bespoke software, engineered with precision. Small studio engineering web, mobile and AI products for ambitious teams.",
  keywords: ["Software Studio", "Product Engineering", "AI Integration", "Next.js", "React Native", "Bengaluru"],
  authors: [{ name: "White Arrow" }],
  openGraph: {
    title: "White Arrow Softwares — Precision Software Studio",
    description: "Bespoke software, engineered with precision.",
    url: "https://zest-animation-suite.lovable.app",
    siteName: "White Arrow",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "White Arrow Softwares",
    description: "Precision Software Studio",
    images: ["/og-image.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent selection:text-background font-sans overflow-x-hidden">
        <Providers>
          <div className="glow-overlay" />
          <Nav />
          <main className="grow relative z-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
