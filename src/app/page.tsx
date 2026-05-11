"use client";

import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { Magnetic } from "../components/Magnetic";
import Link from "next/link";

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata"
      }));
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 grid-bg opacity-40 animate-grid" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[150px] animate-float pointer-events-none" />

        <div className="relative max-w-7xl mx-auto w-full z-10">
          <div className="flex items-center gap-4 mb-12 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground animate-rise">
            <span className="w-2 h-2 rounded-full bg-accent animate-blink" />
            <span>Studio · Est. 2026 · Nashik</span>
            <span className="ml-auto hidden md:block select-none">IST {time}</span>
          </div>

          <h1 className="font-display font-black tracking-[-0.05em] leading-[0.82] text-[clamp(3.5rem,13vw,13rem)]">
            <span className="block animate-rise" style={{ animationDelay: "0.1s" }}>Software,</span>
            <span className="block animate-rise" style={{ animationDelay: "0.2s" }}>
              pointed <span className="shimmer-text italic font-light pr-10">forward</span>
            </span>
            <span className="block animate-rise text-stroke" style={{ animationDelay: "0.3s" }}>
              with intent.
            </span>
          </h1>

          <div className="grid md:grid-cols-[1fr_auto] gap-12 mt-20 items-end">
            <Reveal delay={400}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl text-balance leading-relaxed">
                We are <span className="text-foreground font-semibold">White Arrow</span> — a small studio engineering web, mobile and AI products for ambitious teams who refuse generic.
              </p>
            </Reveal>

            <div className="flex flex-wrap gap-5 md:justify-end">
              <Reveal delay={500}>
                <Magnetic>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-4 px-10 py-5 rounded-full bg-foreground text-background font-bold hover:scale-105 active:scale-95 transition-all"
                  >
                    Start a project
                    <svg viewBox="0 0 24 24" className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </Link>
                </Magnetic>
              </Reveal>
              <Reveal delay={600}>
                <Magnetic>
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-4 px-10 py-5 rounded-full border border-border hover:border-foreground hover:bg-foreground/5 transition-all font-bold"
                  >
                    See our work
                  </Link>
                </Magnetic>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Flying arrow animation */}
        <div className="absolute bottom-20 left-0 right-0 overflow-hidden h-16 opacity-30 pointer-events-none">
          <div className="flex animate-arrow-fly text-accent items-center justify-center">
            <svg viewBox="0 0 120 24" className="w-48 h-16"><path d="M0 12h110M100 4l12 8-12 8" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" /></svg>
          </div>
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <section className="relative py-12 border-y border-border bg-card/30 backdrop-blur-sm overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8 font-display font-bold text-4xl md:text-6xl tracking-tighter">
              {["Web Apps", "AI / LLM", "Mobile", "SaaS", "Cloud Systems"].map((s) => (
                <span key={s} className="flex items-center gap-16">
                  <span className="text-stroke hover:text-foreground transition-all duration-700 cursor-default">{s}</span>
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-accent opacity-50" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section className="relative py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-6">[01] Capabilities</p>
                <h2 className="font-display font-bold text-6xl md:text-8xl tracking-tight leading-[0.9]">What we<br />engineer.</h2>
              </div>
              <p className="text-muted-foreground max-w-sm text-lg leading-relaxed border-l border-border pl-8 italic">
                Four focused practices. Zero filler. Every engagement led by a senior engineer.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { n: "01", t: "Product Engineering", d: "End-to-end web & mobile builds. React, Next, TanStack, React Native, Swift.", tags: ["TypeScript", "Edge", "Realtime"] },
              { n: "02", t: "AI Integration", d: "LLM-powered features that ship. RAG pipelines, agents, evals, vector search.", tags: ["OpenAI", "Anthropic", "RAG"] },
              { n: "03", t: "Design Systems", d: "Brand-true component libraries with motion, accessibility and developer joy.", tags: ["Figma", "Tailwind", "Motion"] },
              { n: "04", t: "Cloud & DevOps", d: "Scalable infrastructure on Cloudflare, Vercel, AWS. Observability built-in.", tags: ["Workers", "Postgres", "CI/CD"] },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <Link href="/services" className="block h-full">
                  <div className="glass-card group relative p-12 lg:p-16 rounded-[2rem] cursor-pointer h-full">
                    <div className="flex items-start justify-between mb-16">
                      <span className="font-mono text-xs text-muted-foreground opacity-50">{s.n} / 04</span>
                      <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-foreground group-hover:text-background transition-transform duration-500 group-hover:rotate-45" fill="none" stroke="currentColor" strokeWidth="3"><path d="M7 17L17 7M9 7h8v8" /></svg>
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-4xl lg:text-5xl tracking-tight mb-6 group-hover:text-accent transition-colors">{s.t}</h3>
                    <p className="text-muted-foreground text-lg mb-12 max-w-md leading-relaxed">{s.d}</p>
                    <div className="flex flex-wrap gap-3">
                      {s.tags.map((t) => (
                        <span key={t} className="font-mono text-[10px] uppercase tracking-widest px-4 py-2 rounded-full border border-border group-hover:border-accent/30 transition-colors">{t}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="relative py-40 px-6 bg-card/40 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 animate-grid" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-6">[02] Process</p>
            <h2 className="font-display font-bold text-6xl md:text-8xl tracking-tight mb-32 leading-[0.9]">Four steps.<br /><span className="text-stroke">No drama.</span></h2>
          </Reveal>

          <div className="space-y-4">
            {[
              { n: "01", t: "Discover", d: "We sit with your problem. Map users, constraints, ambitions. Output: a sharp brief." },
              { n: "02", t: "Design", d: "Rapid prototypes in code. Brand-true motion, real data, clickable from week one." },
              { n: "03", t: "Build", d: "Senior engineers ship weekly. You see progress in production, not slide decks." },
              { n: "04", t: "Evolve", d: "We stay on as a partner — measuring, iterating, scaling what works." },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 100}>
                <Link href="/studio">
                  <div className="group glass-card p-10 md:p-14 rounded-[2rem] grid md:grid-cols-[140px_1fr_auto] gap-12 items-center cursor-pointer">
                    <span className="font-mono text-xl text-accent font-bold">— {p.n}</span>
                    <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-20">
                      <h3 className="font-display font-bold text-4xl md:text-6xl tracking-tighter min-w-[300px] group-hover:translate-x-4 transition-transform duration-700">{p.t}</h3>
                      <p className="text-muted-foreground text-lg max-w-md leading-relaxed">{p.d}</p>
                    </div>
                    <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-700">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-foreground group-hover:text-background transition-all duration-700" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">
          {[
            { n: "12+", l: "Products shipped" },
            { n: "5★", l: "Avg client rating" },
            { n: "48h", l: "First response" },
            { n: "100%", l: "Senior-led" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 100}>
              <div className="border-t border-border pt-10 group cursor-default">
                <div className="font-display font-black text-7xl md:text-8xl tracking-tighter mb-4 group-hover:text-accent group-hover:-translate-y-2 transition-all duration-700">{s.n}</div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MANIFESTO SECTION */}
      <section className="relative py-60 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-accent/5 blur-[200px]" />
        <div className="relative max-w-5xl mx-auto text-center">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-12 animate-rise">[03] Manifesto</p>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.03em] leading-[1.05] text-balance font-bold mb-20">
              We believe software should feel like an <span className="italic text-accent shimmer-text">arrow</span> — light, sharp, and aimed at exactly one thing.{" "}
              <span className="text-stroke">No bloat. No theatre.</span> Just craft, shipped on time.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <Magnetic>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-8 px-16 py-8 rounded-full bg-foreground text-background font-black text-xl hover:scale-105 transition-all"
              >
                Let&apos;s build your vision
                <svg viewBox="0 0 24 24" className="w-8 h-8 group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="3.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
