"use client";

import { useEffect, useState } from "react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ArrowCursor } from "../components/ArrowCursor";
import { Reveal } from "../components/Reveal";
import { Magnetic } from "../components/Magnetic";
import Link from "next/link";

export default function Home() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: "Asia/Kolkata" }));
    };
    tick(); const i = setInterval(tick, 1000); return () => clearInterval(i);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ArrowCursor />
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 animate-grid" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px] animate-float pointer-events-none" />

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-8 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground animate-rise">
            <span className="w-2 h-2 rounded-full bg-accent animate-blink" />
            <span>Studio · Est. 2026 · Bengaluru</span>
            <span className="ml-auto hidden md:block">IST {time}</span>
          </div>

          <h1 className="font-display font-black tracking-[-0.04em] leading-[0.85] text-[clamp(3rem,11vw,11rem)]">
            <span className="block animate-rise" style={{ animationDelay: "0.1s" }}>Software,</span>
            <span className="block animate-rise" style={{ animationDelay: "0.25s" }}>
              pointed <span className="shimmer-text italic font-light">forward</span>
            </span>
            <span className="block animate-rise text-stroke" style={{ animationDelay: "0.4s" }}>
              with intent.
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mt-16 items-end">
            <Reveal delay={400}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md text-balance">
                We are <span className="text-foreground font-semibold">White Arrow</span> — a small studio engineering web, mobile and AI products for ambitious teams who refuse generic.
              </p>
            </Reveal>
            <Reveal delay={550} className="flex flex-wrap gap-4 md:justify-end">
              <Magnetic>
                <Link href="/contact" className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-foreground text-background font-semibold hover:gap-5 transition-all">
                  Start a project
                  <svg viewBox="0 0 24 24" className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="/work" className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-border hover:border-foreground transition-colors font-semibold">
                  See our work
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </div>

        {/* Flying arrows ribbon */}
        <div className="absolute bottom-10 left-0 right-0 overflow-hidden h-12 opacity-60">
          <div className="flex animate-arrow-fly text-accent">
            <svg viewBox="0 0 100 24" className="w-40 h-12"><path d="M0 12h90M80 4l12 8-12 8" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="relative py-8 border-y border-border bg-background overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6 font-display font-bold text-3xl md:text-5xl tracking-tight">
              {["Web Apps", "Mobile", "AI / LLM", "SaaS", "Cloud", "Design Systems", "DevOps", "API Platforms"].map((s) => (
                <span key={s} className="flex items-center gap-12">
                  <span className="text-stroke hover:text-foreground transition-colors">{s}</span>
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between mb-20 flex-wrap gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">[01] Capabilities</p>
                <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tighter">What we engineer.</h2>
              </div>
              <p className="text-muted-foreground max-w-sm">Four focused practices. Zero filler. Every engagement led by a senior engineer.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              { n: "01", t: "Product Engineering", d: "End-to-end web & mobile builds. React, Next, TanStack, React Native, Swift.", tags: ["TypeScript", "Edge", "Realtime"] },
              { n: "02", t: "AI Integration", d: "LLM-powered features that ship. RAG pipelines, agents, evals, vector search.", tags: ["OpenAI", "Anthropic", "RAG"] },
              { n: "03", t: "Design Systems", d: "Brand-true component libraries with motion, accessibility and developer joy.", tags: ["Figma", "Tailwind", "shadcn"] },
              { n: "04", t: "Cloud & DevOps", d: "Scalable infrastructure on Cloudflare, Vercel, AWS. Observability built-in.", tags: ["Workers", "Postgres", "CI/CD"] },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="group relative bg-background p-10 md:p-14 hover-lift cursor-pointer h-full">
                  <div className="flex items-start justify-between mb-12">
                    <span className="font-mono text-xs text-muted-foreground">{s.n} / 04</span>
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-foreground/40 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8"/></svg>
                  </div>
                  <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">{s.t}</h3>
                  <p className="text-muted-foreground mb-8 max-w-md">{s.d}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="font-mono text-xs px-3 py-1 rounded-full border border-border">{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-32 px-6 bg-card">
        <div className="absolute inset-0 grid-bg opacity-30 animate-grid" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">[02] Process</p>
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tighter mb-20">Four steps. <span className="text-stroke">No drama.</span></h2>
          </Reveal>

          <div className="space-y-px bg-border">
            {[
              { n: "01", t: "Discover", d: "We sit with your problem. Map users, constraints, ambitions. Output: a sharp brief." },
              { n: "02", t: "Design", d: "Rapid prototypes in code. Brand-true motion, real data, clickable from week one." },
              { n: "03", t: "Build", d: "Senior engineers ship weekly. You see progress in production, not slide decks." },
              { n: "04", t: "Evolve", d: "We stay on as a partner — measuring, iterating, scaling what works." },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <div className="group bg-background p-8 md:p-12 grid md:grid-cols-[120px_1fr_auto] gap-6 md:gap-12 items-center hover:bg-card transition-colors cursor-pointer">
                  <span className="font-mono text-sm text-accent">— {p.n}</span>
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                    <h3 className="font-display font-bold text-3xl md:text-5xl tracking-tighter min-w-[260px] group-hover:translate-x-3 transition-transform">{p.t}</h3>
                    <p className="text-muted-foreground max-w-md">{p.d}</p>
                  </div>
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-foreground/30 group-hover:text-accent group-hover:translate-x-2 transition-all" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          {[
            { n: "12+", l: "Products shipped" },
            { n: "5★", l: "Avg client rating" },
            { n: "48h", l: "First response" },
            { n: "100%", l: "Senior-led" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 100}>
              <div className="border-t border-border pt-6 group">
                <div className="font-display font-black text-6xl md:text-7xl tracking-tighter mb-2 group-hover:text-accent transition-colors">{s.n}</div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative py-40 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[150px]" />
        <div className="relative max-w-5xl mx-auto text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">[03] Manifesto</p>
          </Reveal>
          <Reveal delay={150}>
            <p className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-balance">
              We believe software should feel like an <span className="italic text-accent">arrow</span> — light, sharp, and aimed at exactly one thing.{" "}
              <span className="text-stroke">No bloat. No theatre.</span> Just craft, shipped on time.
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
