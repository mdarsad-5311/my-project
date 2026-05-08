"use client";

import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { ArrowCursor } from "../../components/ArrowCursor";
import { Reveal } from "../../components/Reveal";

const principles = [
  { n: "01", t: "Senior-led, always", d: "Every line of code touched by an experienced engineer. No junior bench warmers." },
  { n: "02", t: "Small by design", d: "Tiny teams move faster. We stay small to stay sharp and to keep quality non-negotiable." },
  { n: "03", t: "Ship weekly", d: "Real software in production beats 200-page specs every single time." },
  { n: "04", t: "Craft over scale", d: "We turn down work that doesn't deserve our best. We'd rather build less, better." },
];

const team = [
  { name: "Aarav Mehta", role: "Founder · Engineering", bio: "10y building product. ex-Razorpay, ex-Atlassian." },
  { name: "Ishita Rao", role: "Design · Motion", bio: "Brand & interaction. ex-Google, ex-Headspace." },
  { name: "Kabir Singh", role: "AI · Infrastructure", bio: "ML systems. ex-Anthropic intern, IIT-B." },
];

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-background">
      <ArrowCursor />
      <Nav />

      <section className="pt-44 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 animate-grid" />
        <div className="relative max-w-7xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-rise">[Inside the studio]</p>
          <h1 className="font-display font-black text-[clamp(3rem,12vw,12rem)] tracking-[-0.04em] leading-[0.85] animate-rise" style={{ animationDelay: "0.1s" }}>
            A small studio.<br/><span className="shimmer-text italic font-light">Sharp aim.</span>
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">[About]</p>
          </Reveal>
          <Reveal delay={150}>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p className="text-foreground text-2xl md:text-3xl font-display tracking-tight leading-snug text-balance">
                White Arrow is a software studio in Bengaluru. We partner with founders and product teams to engineer their next chapter.
              </p>
              <p>Founded in 2026 from a simple frustration: most software is built in the middle. Average specs, average teams, average outcomes. We exist for the work that refuses average.</p>
              <p>We take on a handful of engagements at a time, lead each personally, and treat every release as a reflection of the studio.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="px-6 py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 animate-grid" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">[Principles]</p>
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tighter mb-16">How we work.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 100}>
                <div className="bg-card p-10 md:p-14 hover-lift h-full group">
                  <div className="flex items-start justify-between mb-8">
                    <span className="font-mono text-xs text-accent">— {p.n}</span>
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-foreground/30 group-hover:text-accent group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </div>
                  <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tighter mb-4">{p.t}</h3>
                  <p className="text-muted-foreground">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">[The people]</p>
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tighter mb-16">Three. <span className="text-stroke">For now.</span></h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 120}>
                <div className="group cursor-pointer">
                  <div className="aspect-3/4 bg-card border border-border rounded-2xl mb-6 overflow-hidden relative flex items-center justify-center hover-lift">
                    <div className="absolute inset-0 bg-linear-to-br from-accent/0 to-accent/0 group-hover:from-accent/20 group-hover:to-transparent transition-all duration-700" />
                    <div className="font-display font-black text-9xl text-stroke group-hover:scale-110 transition-transform duration-700">
                      {m.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent animate-blink" />
                  </div>
                  <h3 className="font-display font-bold text-2xl tracking-tight">{m.name}</h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mt-1">{m.role}</p>
                  <p className="text-sm text-muted-foreground mt-3">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
