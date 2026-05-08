"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Magnetic } from "./Magnetic";
import { usePathname } from "next/navigation";

export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = [
        ["Work", "/work"],
        ["Services", "/services"],
        ["Studio", "/studio"],
        ["Contact", "/contact"],
    ];

    return (
        <>
            <header 
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
                    scrolled 
                    ? "py-4 nav-blur border-b border-border" 
                    : "py-8 bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group z-50" onClick={() => setIsOpen(false)}>
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent group-hover:rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                        <span className="font-display font-bold tracking-tight text-xl">
                            white<span className="text-accent">arrow</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-10 text-[11px] font-mono uppercase tracking-[0.2em]">
                        {links.map(([label, href]) => (
                            <Link 
                                key={href} 
                                href={href} 
                                className={`relative transition-colors duration-500 group ${
                                    pathname === href ? "text-accent" : "text-foreground/60 hover:text-foreground"
                                }`}
                            >
                                {label}
                                <span className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-500 ${
                                    pathname === href ? "w-full" : "w-0 group-hover:w-full"
                                }`} />
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-6">
                        <Magnetic>
                            <Link 
                                href="/contact" 
                                className="hidden md:inline-flex items-center gap-3 px-6 py-3 rounded-full bg-foreground text-background text-sm font-bold hover:scale-105 active:scale-95 transition-all"
                            >
                                Start Project
                                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                            </Link>
                        </Magnetic>

                        {/* Mobile Toggle */}
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <span className={`w-6 h-0.5 bg-foreground transition-all duration-500 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                            <span className={`w-4 h-0.5 bg-foreground self-end transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
                            <span className={`w-6 h-0.5 bg-foreground transition-all duration-500 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[90] bg-background transition-all duration-700 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="relative h-full flex flex-col justify-center px-8 pt-20">
                    <nav className="flex flex-col gap-6">
                        {links.map(([label, href], i) => (
                            <Link 
                                key={href} 
                                href={href} 
                                onClick={() => setIsOpen(false)}
                                className={`font-display font-bold text-6xl tracking-tighter transition-all duration-700 flex items-center justify-between group ${
                                    isOpen ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
                                }`}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <span className={pathname === href ? "text-accent" : "group-hover:text-accent"}>{label}</span>
                                <svg viewBox="0 0 24 24" className="w-12 h-12 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                            </Link>
                        ))}
                    </nav>
                    
                    <div className="mt-24 border-t border-border pt-12">
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Connect</p>
                        <a href="mailto:hello@whitearrowsoftwares.in" className="text-2xl font-display text-accent block mb-8">hello@whitearrowsoftwares.in</a>
                        <div className="flex gap-6">
                            {["LinkedIn", "GitHub", "X"].map(s => (
                                <a key={s} href="#" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">{s} ↗</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
