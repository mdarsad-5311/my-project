"use client";

import Link from "next/link";
import { Magnetic } from "./Magnetic";

export function Footer() {
    return (
        <footer className="relative border-t border-border bg-background overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30 animate-grid pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-16 mb-32">
                    <div className="max-w-2xl">
                        <p className="font-mono text-xs uppercase tracking-[0.4em] text-accent mb-8 animate-rise">[ Let's build something ]</p>
                        <h2 className="font-display font-bold text-6xl md:text-[9vw] lg:text-[120px] tracking-[-0.04em] leading-[0.85] mb-8">
                            Have an idea?<br />
                            <span className="shimmer-text">Point it forward.</span>
                        </h2>
                    </div>

                    <div className="flex flex-col gap-8 md:items-end">
                        <Magnetic>
                            <a
                                href="mailto:hello@whitearrowsoftwares.in"
                                className="group flex flex-col items-start md:items-end gap-2"
                            >
                                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Drop us a line</span>
                                <span className="text-2xl md:text-3xl font-display group-hover:text-accent transition-colors flex items-center gap-4">
                                    hello@whitearrowsoftwares.in
                                    <span className="inline-block group-hover:translate-x-3 transition-transform duration-500">→</span>
                                </span>
                            </a>
                        </Magnetic>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-border">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                            <span className="font-display font-bold text-xl tracking-tight">whitearrow</span>
                        </div>
                        <p className="text-muted-foreground max-w-xs text-balance text-sm leading-relaxed">
                            Software studio engineering precise digital products for teams who refuse generic.
                            Nashik, India.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Studio</p>
                        <ul className="space-y-3 text-sm">
                            <li className="hover:text-accent transition-colors cursor-default">Nashik, IN</li>
                            <li className="hover:text-accent transition-colors cursor-default">+91 · on request</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Elsewhere</p>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2 group">LinkedIn <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">↗</span></a></li>
                            <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2 group">GitHub <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">↗</span></a></li>
                            <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2 group">X / Twitter <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">↗</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom watermark section as requested in image */}
            <div className="relative pt-20 pb-4 overflow-hidden select-none pointer-events-none border-t border-white/5">
                {/* Meta info row */}
                <div className="max-w-[1800px] mx-auto px-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    <span>© 2026 White Arrow Softwares</span>
                    <div className="text-lg opacity-40">↗</div>
                    <span className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        Available for new work
                    </span>
                </div>

                {/* Massive Outlined Marquee */}
                <div className="relative py-20 pb-10 overflow-hidden select-none pointer-events-none">
                    <div className="whitespace-nowrap text-[22vw] font-display font-bold tracking-tighter text-stroke leading-none flex">
                        <div className="animate-marquee-slow flex gap-20 px-10 text-white">
                            <span>WHITE ARROW SOFTWARES → WHITE ARROW SOFTWARES → WHITE ARROW SOFTWARES → WHITE ARROW SOFTWARES → </span>
                            <span>WHITE ARROW SOFTWARES → WHITE ARROW SOFTWARES → WHITE ARROW SOFTWARES → WHITE ARROW SOFTWARES → </span>
                        </div>
                    </div>
                </div>

                {/* SEO & Industry Index Section */}
                <div className="relative border-t border-white/5 bg-black/20 pt-20 pb-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-16 lg:gap-32">
                            <div className="space-y-8">
                                <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent">/ Studio Profile</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed text-balance">
                                    White Arrow Softwares is a <span className="text-foreground">global software engineering studio</span> based in <span className="text-foreground">Nashik, India</span>. Operating with a <span className="text-foreground">remote-first</span> culture, we engineer world-class <span className="text-foreground">web platforms, mobile applications, and AI systems</span> for clients across the globe. We combine local engineering excellence with a global perspective to ship high-impact digital products.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent">/ Industry Expertise</h3>
                                <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                                    <li className="hover:text-foreground transition-colors">FinTech Systems</li>
                                    <li className="hover:text-foreground transition-colors">HealthTech Portals</li>
                                    <li className="hover:text-foreground transition-colors">AI & LLM Ops</li>
                                    <li className="hover:text-foreground transition-colors">SaaS Platforms</li>
                                    <li className="hover:text-foreground transition-colors">E-commerce Edge</li>
                                    <li className="hover:text-foreground transition-colors">Global Remote Teams</li>
                                </ul>
                            </div>

                            <div className="space-y-8">
                                <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent">/ Technical Stack</h3>
                                <p className="text-[11px] font-mono leading-relaxed text-muted-foreground uppercase tracking-widest">
                                    Next.js · React Native · TypeScript · Node.js · Python · OpenAI · Anthropic · AWS · Cloudflare · Postgres · Vector Databases · Tailwind CSS · Swift · Kotlin
                                </p>
                            </div>
                        </div>

                        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap gap-x-8 gap-y-4 font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground/50">
                            <span>Best Software Company Nashik</span>
                            <span>Remote Software Development Studio</span>
                            <span>Global Engineering Partner</span>
                            <span>AI Solutions Nashik India</span>
                            <span>Custom App Development Remote</span>
                            <span>Enterprise Software Nashik</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
