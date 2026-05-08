"use client";

import { useEffect, useRef, useState } from "react";

export function ArrowCursor() {
    const ref = useRef<HTMLDivElement>(null);
    const [hover, setHover] = useState(false);

    useEffect(() => {
        let raf = 0;
        let tx = 0, ty = 0, x = 0, y = 0;
        
        const move = (e: MouseEvent) => { 
            tx = e.clientX; 
            ty = e.clientY; 
        };
        
        const loop = () => {
            x += (tx - x) * 0.2;
            y += (ty - y) * 0.2;
            if (ref.current) {
                ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }
            raf = requestAnimationFrame(loop);
        };

        const over = (e: MouseEvent) => {
            const t = e.target as HTMLElement;
            setHover(!!t.closest("a, button, [data-cursor='hover'], input, textarea"));
        };

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseover", over);
        raf = requestAnimationFrame(loop);
        
        return () => { 
            cancelAnimationFrame(raf); 
            window.removeEventListener("mousemove", move); 
            window.removeEventListener("mouseover", over);
        };
    }, []);

    // Disable on mobile/touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

    return (
        <div
            ref={ref}
            className="fixed top-0 left-0 w-6 h-6 -ml-3 -mt-3 rounded-full pointer-events-none z-[9999] transition-transform duration-300 ease-out"
            style={{ 
                mixBlendMode: "difference",
                backgroundColor: "white",
                transform: `scale(${hover ? 3 : 1})`,
            }}
        />
    );
}
