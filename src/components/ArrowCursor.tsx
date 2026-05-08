import { useEffect, useRef, useState } from "react";

export function ArrowCursor() {
    const ref = useRef<HTMLDivElement>(null);
    const [hover, setHover] = useState(false);

    useEffect(() => {
        let raf = 0;
        let tx = 0, ty = 0, x = 0, y = 0;
        const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
        const loop = () => {
            x += (tx - x) * 0.18;
            y += (ty - y) * 0.18;
            if (ref.current) ref.current.style.transform = `translate(${x - 14}px, ${y - 14}px) rotate(-45deg)`;
            raf = requestAnimationFrame(loop);
        };
        const over = (e: MouseEvent) => {
            const t = e.target as HTMLElement;
            setHover(!!t.closest("a, button, [data-cursor='hover']"));
        };
        window.addEventListener("mousemove", move);
        window.addEventListener("mouseover", over);
        raf = requestAnimationFrame(loop);
        return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", move); window.removeEventListener("mouseover", over); };
    }, []);

    return (
        <div
            ref={ref}
            className="arrow-cursor hidden md:flex items-center justify-center"
            style={{ width: hover ? 56 : 28, height: hover ? 56 : 28 }}
        >
            <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="white" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
        </div>
    );
}
