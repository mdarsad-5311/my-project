"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Magnetic } from "./Magnetic";

export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
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
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3 backdrop-blur-xl bg-background/70 border-b border-border" : "py-6"}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group z-50" onClick={() => setIsOpen(false)}>
                        <svg viewBox="0 0 32 32" className="w-7 h-7 glow-arrow group-hover:rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M6 16h20M18 8l8 8-8 8" />
                        </svg>
                        <span className="font-display font-bold tracking-tight text-lg">
                            white<span className="text-accent">arrow</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-mono uppercase tracking-wider">
                        {links.map(([label, href]) => (
                            <Link key={href} href={href} className="relative text-foreground/70 hover:text-foreground transition-colors group">
                                {label}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500" />
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Magnetic>
                            <Link href="/contact" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:gap-4 transition-all">
                                Start Project
                                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                            </Link>
                        </Magnetic>

                        {/* Mobile Toggle */}
                        <button 
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                        >
                            <span className={`w-6 h-px bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                            <span className={`w-6 h-px bg-foreground transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
                            <span className={`w-6 h-px bg-foreground transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-background transition-all duration-700 ease-in-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="relative h-full flex flex-col justify-center px-6 pt-20">
                    <nav className="flex flex-col gap-8">
                        {links.map(([label, href], i) => (
                            <Link 
                                key={href} 
                                href={href} 
                                onClick={() => setIsOpen(false)}
                                className={`font-display font-bold text-5xl tracking-tighter transition-all duration-500 ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                {label}<span className="text-accent italic font-light ml-2">.</span>
                            </Link>
                        ))}
                    </nav>
                    
                    <div className="mt-20 border-t border-border pt-10">
                        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Let's talk</p>
                        <a href="mailto:hello@whitearrowsoftwares.in" className="text-xl font-display text-accent">hello@whitearrowsoftwares.in</a>
                    </div>
                </div>
            </div>
        </>
    );
}
