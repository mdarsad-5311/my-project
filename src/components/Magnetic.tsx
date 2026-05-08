"use client";

import { useRef, type ReactNode } from "react";

export function Magnetic({ children, strength = 0.35, className = "" }: { children: ReactNode; strength?: number; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const onMove = (e: React.MouseEvent) => {
        const el = ref.current; if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * strength;
        const y = (e.clientY - r.top - r.height / 2) * strength;
        el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onLeave = () => { if (ref.current) ref.current.style.transform = "translate(0,0)"; };
    return (
        <div onMouseMove={onMove} onMouseLeave={onLeave} className="inline-block">
            <div ref={ref} className={`magnetic transition-transform duration-300 ease-out ${className}`}>{children}</div>
        </div>
    );
}
