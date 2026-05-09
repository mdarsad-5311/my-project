"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="grow flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <h1 className="font-display font-black text-6xl tracking-tighter text-accent italic">Error</h1>
          <h2 className="mt-4 font-display font-bold text-3xl text-foreground">Something snapped.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We encountered an unexpected turbulence. You can try refreshing the page or head back home.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all hover:scale-105 active:scale-95"
            >
              Try again
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-sm font-semibold text-foreground transition-all hover:bg-accent hover:text-white"
            >
              Go home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
