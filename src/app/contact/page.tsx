"use client";

import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { ArrowCursor } from "../../components/ArrowCursor";
import { Reveal } from "../../components/Reveal";
import { Magnetic } from "../../components/Magnetic";
import { useState } from "react";
import { z } from "zod";

const schema = z.object({
    name: z.string().trim().min(1, "Required").max(100),
    email: z.string().trim().email("Invalid email").max(255),
    company: z.string().trim().max(100).optional(),
    budget: z.string().min(1, "Pick a budget"),
    service: z.string().min(1, "Pick a service"),
    message: z.string().trim().min(10, "Tell us a bit more").max(2000),
});

const budgets = ["< ₹3L", "₹3L — ₹10L", "₹10L — ₹30L", "₹30L+"];
const servicesList = ["Product Engineering", "AI Integration", "Design System", "Cloud & DevOps", "Not sure yet"];

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", service: "", message: "" });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const update = (k: keyof typeof form, v: string) => {
        setForm((f) => ({ ...f, [k]: v }));
        if (errors[k]) setErrors((e) => { const n = { ...e }; delete n[k]; return n; });
    };

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const res = schema.safeParse(form);
        if (!res.success) {
            const errs: Record<string, string> = {};
            res.error.issues.forEach((er) => { if (er.path[0]) errs[er.path[0].toString()] = er.message; });
            setErrors(errs);
            setLoading(false);
            return;
        }

        // Mock send
        await new Promise((r) => setTimeout(r, 2000));
        setSent(true);
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-background">
            <ArrowCursor />
            <Nav />

            <section className="pt-44 pb-12 px-6 relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-30 animate-grid" />
                <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px] animate-float pointer-events-none" />
                <div className="relative max-w-7xl mx-auto">
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-rise">[Start a project]</p>
                    <h1 className="font-display font-black text-[clamp(3rem,11vw,11rem)] tracking-[-0.04em] leading-[0.85] animate-rise" style={{ animationDelay: "0.1s" }}>
                        Let's aim<br /><span className="shimmer-text italic font-light">together.</span>
                    </h1>
                </div>
            </section>

            <section className="px-6 pb-32">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">
                    {/* INFO */}
                    <Reveal className="lg:col-span-4 space-y-10">
                        <div>
                            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">[ Email ]</p>
                            <a href="mailto:hello@whitearrowsoftwares.in" className="text-xl font-display hover:text-accent transition-colors">hello@whitearrowsoftwares.in</a>
                        </div>
                        <div>
                            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">[ Studio ]</p>
                            <p className="text-xl font-display">Bengaluru, India</p>
                        </div>
                        <div>
                            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">[ Response time ]</p>
                            <p className="text-xl font-display flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-accent animate-blink" />
                                Within 48 hours
                            </p>
                        </div>
                        <div>
                            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">[ Elsewhere ]</p>
                            <div className="flex gap-4 text-sm">
                                {["LinkedIn", "GitHub", "X / Twitter"].map((s) => (
                                    <a key={s} href="#" className="hover:text-accent transition-colors">{s} ↗</a>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    {/* FORM */}
                    <Reveal delay={200} className="lg:col-span-8">
                        <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12 overflow-hidden">
                            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

                            {sent ? (
                                <div className="relative py-16 text-center animate-rise">
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent text-background mb-8 animate-arrow-pulse">
                                        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                                    </div>
                                    <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tighter mb-4">Arrow received.</h2>
                                    <p className="text-muted-foreground max-w-sm mx-auto">We've received your message and will get back to you within 48 hours. Looking forward to it!</p>
                                </div>
                            ) : (
                                <form onSubmit={submit} className="relative space-y-8">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Field label="01 — Your name" error={errors.name}>
                                            <input value={form.name} onChange={(e) => update("name", e.target.value)} maxLength={100} placeholder="Aarav Mehta" className="w-full bg-transparent border-b border-border pb-3 text-lg font-display focus:border-accent outline-none transition-colors" />
                                        </Field>
                                        <Field label="02 — Email" error={errors.email}>
                                            <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} maxLength={255} placeholder="you@company.com" className="w-full bg-transparent border-b border-border pb-3 text-lg font-display focus:border-accent outline-none transition-colors" />
                                        </Field>
                                    </div>

                                    <Field label="03 — Company / Studio (Optional)" error={errors.company}>
                                        <input value={form.company} onChange={(e) => update("company", e.target.value)} maxLength={100} placeholder="Studio name" className="w-full bg-transparent border-b border-border pb-3 text-lg font-display focus:border-accent outline-none transition-colors" />
                                    </Field>

                                    <Field label="04 — Service" error={errors.service}>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {servicesList.map((s) => (
                                                <button type="button" key={s} onClick={() => update("service", s)} data-cursor="hover"
                                                    className={`px-4 py-2 rounded-full border text-sm font-mono transition-all ${form.service === s ? "border-accent bg-accent text-background" : "border-border hover:border-foreground"}`}>
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                    </Field>

                                    <Field label="05 — Budget range" error={errors.budget}>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {budgets.map((b) => (
                                                <button type="button" key={b} onClick={() => update("budget", b)} data-cursor="hover"
                                                    className={`px-4 py-2 rounded-full border text-sm font-mono transition-all ${form.budget === b ? "border-accent bg-accent text-background" : "border-border hover:border-foreground"}`}>
                                                    {b}
                                                </button>
                                            ))}
                                        </div>
                                    </Field>

                                    <Field label="06 — Tell us about it" error={errors.message}>
                                        <textarea value={form.message} onChange={(e) => update("message", e.target.value)} maxLength={2000} rows={5} placeholder="What are you building? What's the deadline?" className="w-full bg-transparent border-b border-border pb-3 text-lg font-display focus:border-accent outline-none transition-colors resize-none" />
                                        <p className="font-mono text-xs text-muted-foreground mt-2 text-right">{form.message.length} / 2000</p>
                                    </Field>

                                    <div className="pt-6">
                                        <Magnetic>
                                            <button
                                                disabled={loading}
                                                type="submit"
                                                className="group inline-flex items-center gap-4 px-10 py-5 rounded-full bg-foreground text-background font-bold hover:gap-6 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {loading ? "Sending..." : "Shoot the arrow"}
                                                <svg viewBox="0 0 24 24" className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                                            </button>
                                        </Magnetic>
                                    </div>
                                </form>
                            )}
                        </div>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
    return (
        <label className="block group">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block mb-3 group-focus-within:text-accent transition-colors">{label}</span>
            {children}
            {error && <span className="font-mono text-xs text-destructive block mt-2 animate-rise">↳ {error}</span>}
        </label>
    );
}
