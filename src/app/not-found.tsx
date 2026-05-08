"use client";

import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="grow flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <h1 className="font-display font-black text-9xl tracking-tighter text-accent">404</h1>
          <h2 className="mt-4 font-display font-bold text-3xl text-foreground">Arrow lost.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The page you're looking for doesn't exist or has been moved to a new coordinate.
          </p>
          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all hover:gap-4 group"
            >
              Go home
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
