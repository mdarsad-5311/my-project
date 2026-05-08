"use client";

export function Footer() {
    return (
        <footer className="relative border-t border-border bg-background overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30 animate-grid pointer-events-none" />
            <div className="relative max-w-7xl mx-auto px-6 py-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Let's build something</p>
                        <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tighter leading-[0.95]">
                            Have an idea?<br />
                            <span className="shimmer-text">Point it forward.</span>
                        </h2>
                    </div>
                    <a href="mailto:hello@whitearrowsoftwares.in" className="group inline-flex items-center gap-3 text-lg font-mono">
                        hello@whitearrowsoftwares.in
                        <span className="inline-block group-hover:translate-x-2 transition-transform">→</span>
                    </a>
                </div>

                <div className="grid md:grid-cols-4 gap-10 pt-12 border-t border-border">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-3">
                            <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 16h20M18 8l8 8-8 8" /></svg>
                            <span className="font-bold">whitearrow</span>
                        </div>
                        <p className="text-sm text-muted-foreground max-w-sm">Software studio engineering precise digital products. Bengaluru, India.</p>
                    </div>
                    <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">Studio</p>
                        <ul className="space-y-2 text-sm">
                            <li>Bengaluru, IN</li>
                            <li>+91 · on request</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">Elsewhere</p>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-accent transition-colors">LinkedIn ↗</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">GitHub ↗</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">X / Twitter ↗</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-12 pt-6 border-t border-border text-xs font-mono text-muted-foreground">
                    <span>© 2026 White Arrow Softwares</span>
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent animate-blink" />
                        available for new work
                    </span>
                </div>
            </div>

            {/* Massive arrow watermark */}
            <div className="relative overflow-hidden">
                <div className="whitespace-nowrap text-[18vw] font-display font-black tracking-tighter text-stroke leading-none flex animate-marquee-slow">
                    <span className="px-8">WHITEARROW → WHITEARROW → WHITEARROW → </span>
                    <span className="px-8">WHITEARROW → WHITEARROW → WHITEARROW → </span>
                </div>
            </div>
        </footer>
    );
}
