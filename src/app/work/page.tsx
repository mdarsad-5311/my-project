"use client";

import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import { useEffect, useState } from "react";
import Link from "next/link";

const projects = [
    { n: "01", year: "2026", title: "Toga", cat: "Industrial · AI", desc: "Automated software used for monitoring and maintenance of Oil and Gas transformers.", color: "oklch(0.78 0.18 75)" },
    { n: "02", year: "2026", title: "ScanSync", cat: "SaaS · Workflow", desc: "QR code based solution to seamlessly manage and track complex workflows.", color: "oklch(0.7 0.2 200)" },
    { n: "03", year: "2025", title: "Hostnob", cat: "Web · Hosting", desc: "Premium hosting platform utilizing WHMCS API with custom development for domain and server purchasing.", color: "oklch(0.7 0.2 350)" },
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
        <div className="min-h-screen bg-background text-foreground">
            <Nav />

            {/* HERO */}
            <section className="pt-52 pb-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-30 animate-grid" />
                <div className="relative max-w-7xl mx-auto">
                    <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-8 animate-rise">[ Selected Work · 2024 — 2026 ]</p>
                    <h1 className="font-display font-black text-[clamp(3.5rem,13vw,13rem)] tracking-[-0.05em] leading-[0.82] animate-rise" style={{ animationDelay: "0.1s" }}>
                        Things we<br /><span className="shimmer-text italic font-light">shipped.</span>
                    </h1>
                </div>
            </section>

            {/* PROJECTS */}
            <section className="relative px-6 pb-44">
                <div className="max-w-7xl mx-auto border-t border-border">
                    {projects.map((p, i) => (
                        <Reveal key={p.n} delay={i * 80}>
                            <Link
                                href="/contact"
                                onMouseEnter={() => setHovered(p.n)}
                                onMouseLeave={() => setHovered(null)}
                                className="group grid grid-cols-12 gap-6 py-12 md:py-20 border-b border-border items-center hover:px-8 transition-all duration-700 cursor-pointer relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.02] transition-colors duration-700" />
                                
                                <span className="col-span-1 font-mono text-xs text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity">{p.n}</span>
                                
                                <div className="col-span-11 md:col-span-5">
                                    <h3 className="font-display font-bold text-4xl md:text-7xl tracking-tighter group-hover:text-accent transition-all duration-700 group-hover:translate-x-2">
                                        {p.title}
                                    </h3>
                                </div>
                                
                                <p className="col-span-12 md:col-span-3 text-lg text-muted-foreground leading-relaxed mt-4 md:mt-0 group-hover:text-foreground transition-colors duration-700">
                                    {p.desc}
                                </p>
                                
                                <div className="hidden md:flex col-span-2 flex-col items-end gap-1">
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{p.cat}</span>
                                </div>
                                
                                <span className="hidden md:block col-span-1 font-mono text-sm text-accent text-right font-bold">{p.year}</span>
                                
                                <div className="col-span-12 md:hidden mt-6 flex justify-between items-center">
                                     <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{p.cat}</span>
                                     <span className="font-mono text-sm text-accent font-bold">{p.year}</span>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>

                {/* Floating Preview Card */}
                {hovered && (
                    <div
                        className="hidden lg:block fixed pointer-events-none z-50 transition-transform duration-200 ease-out"
                        style={{ left: pos.x + 40, top: pos.y - 100 }}
                    >
                        <div
                            className="w-80 h-52 rounded-[2rem] flex items-center justify-center font-display font-bold text-3xl animate-scale-in glass-card border-2 border-accent/20 overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-20" style={{ backgroundColor: projects.find(p => p.n === hovered)?.color }} />
                            <div className="relative z-10 text-center px-6">
                                <p className="text-xs font-mono uppercase tracking-[0.3em] mb-2 opacity-60">View Case Study</p>
                                {projects.find(p => p.n === hovered)?.title}
                            </div>
                        </div>
                    </div>
                )}
            </section>

            <Footer />
        </div>
    );
}
