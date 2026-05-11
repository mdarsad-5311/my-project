"use client";

import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
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
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="pt-52 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 animate-grid" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[150px] animate-float" />
        <div className="relative max-w-7xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-8 animate-rise">[ What we do ]</p>
          <h1 className="font-display font-black text-[clamp(3.5rem,13vw,13rem)] tracking-[-0.05em] leading-[0.82] animate-rise" style={{ animationDelay: "0.1s" }}>
            Four<br/>practices.<br/><span className="text-stroke">One studio.</span>
          </h1>
        </div>
      </section>

      <section className="px-6 pb-44">
        <div className="max-w-7xl mx-auto border-t border-border">
          {services.map((s, i) => {
            const isOpen = open === s.n;
            return (
              <Reveal key={s.n} delay={i * 100}>
                <div className={`border-b border-border transition-all duration-700 ${isOpen ? "bg-card/20 px-8 rounded-[2rem] my-4" : ""}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : s.n)}
                    className="w-full grid grid-cols-12 gap-6 py-12 md:py-16 items-center text-left group cursor-pointer focus:outline-none"
                  >
                    <span className="col-span-1 font-mono text-xs text-muted-foreground opacity-50">{s.n}</span>
                    <div className="col-span-9 md:col-span-7">
                      <h3 className="font-display font-bold text-4xl md:text-6xl tracking-tighter group-hover:text-accent transition-all duration-500 group-hover:translate-x-2">{s.title}</h3>
                    </div>
                    <span className="hidden md:block col-span-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.sub}</span>
                    <div className="col-span-2 md:col-span-1 flex justify-end">
                      <div className={`w-14 h-14 rounded-full border border-border flex items-center justify-center transition-all duration-700 ${isOpen ? "rotate-90 bg-accent text-background border-accent" : "group-hover:border-accent group-hover:scale-110"}`}>
                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                      </div>
                    </div>
                  </button>

                  <div className={`grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "grid-rows-[1fr] opacity-100 pb-16" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <div className="grid lg:grid-cols-12 gap-12 pt-4">
                        <div className="lg:col-start-2 lg:col-span-6">
                          <p className="text-xl text-muted-foreground leading-relaxed mb-10 text-balance">{s.body}</p>
                          <div className="inline-flex items-center gap-4 bg-background/50 border border-border px-6 py-3 rounded-full">
                             <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Investment</span>
                             <span className="font-display font-bold text-xl text-accent">Starting at {s.starting}</span>
                          </div>
                        </div>
                        <div className="lg:col-span-4 lg:col-start-9">
                          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Deliverables</p>
                          <ul className="space-y-4">
                            {s.deliverables.map((d) => (
                              <li key={d} className="flex items-center gap-4 text-sm group/item">
                                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover/item:border-accent transition-colors">
                                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" strokeWidth="3.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                                </div>
                                <span className="group-hover/item:text-foreground transition-colors">{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
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
