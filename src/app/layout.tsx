import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
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
  metadataBase: new URL("https://whitearrowsoftwares.in"),
  title: {
    default: "White Arrow Softwares | Precision Software Studio Nashik",
    template: "%s | White Arrow Softwares"
  },
  description: "White Arrow is a premium software engineering studio based in Nashik, India. We build high-performance web, mobile, and AI solutions for global founders who refuse average.",
  keywords: ["Software Studio Nashik", "Best IT Company Nashik", "AI Engineering India", "Product Development Studio", "Web Development Nashik", "Mobile App Development", "Remote Engineering Team"],
  authors: [{ name: "White Arrow Softwares" }],
  creator: "White Arrow Softwares",
  publisher: "White Arrow Softwares",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "White Arrow Softwares | Precision Software Studio",
    description: "Bespoke software, engineered with precision. Small studio engineering web, mobile and AI products for ambitious teams.",
    url: "https://whitearrowsoftwares.in",
    siteName: "White Arrow",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "White Arrow Softwares Logo" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "White Arrow Softwares | Precision Software Studio",
    description: "Bespoke software, engineered with precision in Nashik, India.",
    images: ["/og-image.png"],
    creator: "@whitearrow",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      data-scroll-behavior="smooth"
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
