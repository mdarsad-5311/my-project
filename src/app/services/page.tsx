"use client";

import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { ArrowCursor } from "../../components/ArrowCursor";
import { Reveal } from "../../components/Reveal";
import { useState } from "react";

const services = [
  {
    n: "01",
    title: "Product Engineering",
    sub: "Web · Mobile · Desktop",
    body: "Full-stack builds from blank repo to production. We use modern, fast stacks — TanStack, Next, React Native, Swift — and ship weekly to real users.",
    deliverables: ["Architecture & tech strategy", "Design system in code", "Web & mobile apps", "Performance budgets", "QA & accessibility"],
    starting: "₹6L",
  },
  {
    n: "02",
    title: "AI Integration",
    sub: "LLM · RAG · Agents",
    body: "Move beyond chatbot demos. We engineer evaluable AI features — retrieval, agents, function-calling — with cost ceilings and safety baked in.",
    deliverables: ["Prompt & eval harness", "RAG pipelines", "Agent workflows", "Vector & graph DBs", "Cost & latency monitoring"],
    starting: "₹4L",
  },
  {
    n: "03",
    title: "Design Systems",
    sub: "Brand · Components · Motion",
    body: "Design systems that designers and developers actually use. Tokens, components, motion and docs — wired to Figma and your repo.",
    deliverables: ["Design tokens", "Component library", "Motion guidelines", "Storybook & docs", "Adoption playbook"],
    starting: "₹3L",
  },
  {
    n: "04",
    title: "Cloud & DevOps",
    sub: "Edge · Postgres · CI/CD",
    body: "Infrastructure that scales without surprises. Edge-first architectures on Cloudflare, Vercel and AWS — observable from day one.",
    deliverables: ["Infra as code", "CI/CD pipelines", "Monitoring & alerts", "Cost optimization", "Incident playbooks"],
    starting: "₹2.5L",
  },
];

export default function ServicesPage() {
  const [open, setOpen] = useState<string | null>("01");

  return (
    <div className="min-h-screen bg-background">
      <ArrowCursor />
      <Nav />

      <section className="pt-44 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 animate-grid" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] animate-float" />
        <div className="relative max-w-7xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-rise">[What we do]</p>
          <h1 className="font-display font-black text-[clamp(3rem,12vw,12rem)] tracking-[-0.04em] leading-[0.85] animate-rise" style={{ animationDelay: "0.1s" }}>
            Four<br/>practices.<br/><span className="text-stroke">One studio.</span>
          </h1>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto border-t border-border">
          {services.map((s, i) => {
            const isOpen = open === s.n;
            return (
              <Reveal key={s.n} delay={i * 80}>
                <div className="border-b border-border">
                  <button
                    onClick={() => setOpen(isOpen ? null : s.n)}
                    className="w-full grid grid-cols-12 gap-4 py-8 md:py-10 items-center text-left group cursor-pointer"
                    data-cursor="hover"
                  >
                    <span className="col-span-1 font-mono text-xs text-muted-foreground">{s.n}</span>
                    <div className="col-span-9 md:col-span-7">
                      <h3 className="font-display font-bold text-3xl md:text-5xl tracking-tighter group-hover:text-accent transition-colors">{s.title}</h3>
                    </div>
                    <span className="hidden md:block col-span-3 font-mono text-xs text-muted-foreground">{s.sub}</span>
                    <span className="col-span-2 md:col-span-1 flex justify-end">
                      <span className={`w-10 h-10 rounded-full border border-border flex items-center justify-center transition-transform duration-500 ${isOpen ? "rotate-90 bg-accent text-background border-accent" : "group-hover:border-foreground"}`}>
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                      </span>
                    </span>
                  </button>

                  <div className={`grid transition-all duration-700 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <div className="grid md:grid-cols-12 gap-8 pb-12 pt-2">
                        <div className="md:col-start-2 md:col-span-6">
                          <p className="text-lg text-muted-foreground leading-relaxed mb-6">{s.body}</p>
                          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Starting at <span className="text-accent">{s.starting}</span></p>
                        </div>
                        <ul className="md:col-span-4 space-y-3">
                          {s.deliverables.map((d) => (
                            <li key={d} className="flex items-center gap-3 text-sm">
                              <svg viewBox="0 0 24 24" className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
