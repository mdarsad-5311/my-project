"use client";

import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { ArrowCursor } from "../../components/ArrowCursor";
import { Reveal } from "../../components/Reveal";
import { useEffect, useState } from "react";
import Link from "next/link";

const projects = [
    { n: "01", year: "2026", title: "Helio Finance", cat: "FinTech · Web App", desc: "Realtime trading dashboard with sub-100ms render budget.", color: "oklch(0.78 0.18 75)" },
    { n: "02", year: "2025", title: "Kavi LLM Studio", cat: "AI · SaaS", desc: "Multi-tenant prompt workbench with eval harness and RAG pipelines.", color: "oklch(0.7 0.2 200)" },
    { n: "03", year: "2025", title: "Northwind OS", cat: "Enterprise · Platform", desc: "Internal tools platform for a 4,000-person logistics company.", color: "oklch(0.7 0.2 350)" },
    { n: "04", year: "2025", title: "Folio Mobile", cat: "Mobile · iOS/Android", desc: "Cross-platform portfolio tracker with offline-first sync.", color: "oklch(0.78 0.18 140)" },
    { n: "05", year: "2024", title: "Atlas Health", cat: "Healthcare · Web", desc: "Patient intake & telemedicine portal compliant with HIPAA.", color: "oklch(0.78 0.18 30)" },
    { n: "06", year: "2024", title: "Mira Commerce", cat: "Retail · Headless", desc: "Headless commerce stack on edge runtime — 98 Lighthouse.", color: "oklch(0.7 0.2 280)" },
];

export default function WorkPage() {
    const [hovered, setHovered] = useState<string | null>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const m = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", m);
        return () => window.removeEventListener("mousemove", m);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <ArrowCursor />
            <Nav />

            {/* HERO */}
            <section className="pt-44 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-30 animate-grid" />
                <div className="relative max-w-7xl mx-auto">
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-rise">[Selected Work · 2024 — 2026]</p>
                    <h1 className="font-display font-black text-[clamp(3rem,12vw,12rem)] tracking-[-0.04em] leading-[0.85] animate-rise" style={{ animationDelay: "0.1s" }}>
                        Things we<br /><span className="shimmer-text italic font-light">shipped.</span>
                    </h1>
                </div>
            </section>

            {/* PROJECTS */}
            <section className="relative px-6 pb-32">
                <div className="max-w-7xl mx-auto border-t border-border">
                    {projects.map((p, i) => (
                        <Reveal key={p.n} delay={i * 60}>
                            <Link
                                href="/contact"
                                onMouseEnter={() => setHovered(p.n)}
                                onMouseLeave={() => setHovered(null)}
                                className="group grid grid-cols-12 gap-4 py-10 border-b border-border items-center hover:pl-6 transition-all duration-500 cursor-pointer"
                            >
                                <span className="col-span-1 font-mono text-xs text-muted-foreground">{p.n}</span>
                                <div className="col-span-5 md:col-span-4">
                                    <h3 className="font-display font-bold text-3xl md:text-5xl tracking-tighter group-hover:text-accent transition-colors">{p.title}</h3>
                                </div>
                                <p className="col-span-6 md:col-span-4 text-sm text-muted-foreground">{p.desc}</p>
                                <span className="hidden md:block col-span-2 font-mono text-xs text-muted-foreground">{p.cat}</span>
                                <span className="hidden md:block col-span-1 font-mono text-xs text-muted-foreground text-right">{p.year}</span>
                            </Link>
                        </Reveal>
                    ))}
                </div>

                {/* Cursor preview card */}
                {hovered && (
                    <div
                        className="hidden md:block fixed pointer-events-none z-40 transition-transform duration-100"
                        style={{ left: pos.x + 24, top: pos.y + 24 }}
                    >
                        <div
                            className="w-64 h-40 rounded-2xl flex items-center justify-center font-display font-bold text-2xl animate-scale-in"
                            style={{ background: `linear-gradient(135deg, ${projects.find(p => p.n === hovered)?.color}, oklch(0.2 0.02 260))` }}
                        >
                            {projects.find(p => p.n === hovered)?.title}
                        </div>
                    </div>
                )}
            </section>

            <Footer />
        </div>
    );
}
