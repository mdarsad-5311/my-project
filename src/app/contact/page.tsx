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
const servicesList = ["Product Engineering", "AI Integration", "Design System", "Cloud & DevOps", "Other"];

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
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        // Mock send
        await new Promise((r) => setTimeout(r, 2000));
        setSent(true);
        setLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <ArrowCursor />
            <Nav />

            <section className="pt-52 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-30 animate-grid" />
                <div className="absolute top-1/2 right-0 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[150px] animate-float pointer-events-none" />
                <div className="relative max-w-7xl mx-auto">
                    <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-8 animate-rise">[ Start a project ]</p>
                    <h1 className="font-display font-black text-[clamp(3.5rem,11vw,11rem)] tracking-[-0.05em] leading-[0.82] animate-rise" style={{ animationDelay: "0.1s" }}>
                        Let&apos;s aim<br /><span className="shimmer-text italic font-light">together.</span>
                    </h1>
                </div>
            </section>

            <section className="px-6 pb-44">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-24 lg:gap-32">
                    {/* INFO SIDEBAR */}
                    <div className="lg:col-span-4 order-2 lg:order-1">
                        <Reveal className="space-y-16">
                            <div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-6">/ Email</p>
                                <Magnetic>
                                    <a href="mailto:hello@whitearrowsoftwares.in" className="text-2xl font-display hover:text-accent transition-colors block border-b border-border pb-4">
                                        hello@whitearrowsoftwares.in
                                    </a>
                                </Magnetic>
                            </div>
                            
                            <div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-6">/ Studio</p>
                                <p className="text-2xl font-display mb-2">Nashik, India</p>
                                <p className="text-muted-foreground text-sm leading-relaxed">Globally remote. Available for sync calls across IST, GMT, and EST timezones.</p>
                            </div>
                            
                            <div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-6">/ Response time</p>
                                <p className="text-2xl font-display flex items-center gap-4">
                                    <span className="w-2.5 h-2.5 rounded-full bg-accent animate-blink" />
                                    Within 48 hours
                                </p>
                            </div>

                            <div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-8">/ Elsewhere</p>
                                <div className="flex flex-col gap-4 text-sm font-mono uppercase tracking-[0.2em]">
                                    {["LinkedIn", "GitHub", "X / Twitter"].map((s) => (
                                        <a key={s} href="#" className="flex items-center justify-between group hover:text-accent transition-colors border-b border-border/50 pb-3">
                                            {s} <span className="text-xs group-hover:translate-x-1 transition-transform">↗</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* FORM SECTION */}
                    <div className="lg:col-span-8 order-1 lg:order-2">
                        <Reveal delay={200}>
                            <div className="relative glass-card border-border rounded-[3rem] p-10 md:p-16 overflow-hidden">
                                <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

                                {sent ? (
                                    <div className="relative py-24 text-center animate-rise">
                                        <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-accent text-background mb-10 animate-arrow-pulse">
                                            <svg viewBox="0 0 24 24" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="3.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                                        </div>
                                        <h2 className="font-display font-bold text-5xl md:text-6xl tracking-tighter mb-6">Arrow received.</h2>
                                        <p className="text-muted-foreground text-xl max-w-sm mx-auto leading-relaxed">We&apos;ve received your message and will get back to you soon. Looking forward to it!</p>
                                        <button onClick={() => setSent(false)} className="mt-12 text-accent font-mono text-xs uppercase tracking-widest hover:underline">Send another arrow</button>
                                    </div>
                                ) : (
                                    <form onSubmit={submit} className="relative space-y-12">
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <Field label="01 — Full Name" error={errors.name}>
                                                <input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Aarav Mehta" className="w-full bg-transparent border-b border-border pb-4 text-xl font-display focus:border-accent outline-none transition-all placeholder:opacity-30" />
                                            </Field>
                                            <Field label="02 — Email Address" error={errors.email}>
                                                <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@company.com" className="w-full bg-transparent border-b border-border pb-4 text-xl font-display focus:border-accent outline-none transition-all placeholder:opacity-30" />
                                            </Field>
                                        </div>

                                        <Field label="03 — Company / Studio (Optional)" error={errors.company}>
                                            <input value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Company name" className="w-full bg-transparent border-b border-border pb-4 text-xl font-display focus:border-accent outline-none transition-all placeholder:opacity-30" />
                                        </Field>

                                        <Field label="04 — What do you need help with?" error={errors.service}>
                                            <div className="flex flex-wrap gap-3 pt-4">
                                                {servicesList.map((s) => (
                                                    <button type="button" key={s} onClick={() => update("service", s)}
                                                        className={`px-6 py-3 rounded-full border text-xs font-mono uppercase tracking-widest transition-all ${form.service === s ? "border-accent bg-accent text-background font-bold" : "border-border hover:border-accent/50"}`}>
                                                        {s}
                                                    </button>
                                                ))}
                                            </div>
                                        </Field>

                                        <Field label="05 — Budget range" error={errors.budget}>
                                            <div className="flex flex-wrap gap-3 pt-4">
                                                {budgets.map((b) => (
                                                    <button type="button" key={b} onClick={() => update("budget", b)}
                                                        className={`px-6 py-3 rounded-full border text-xs font-mono uppercase tracking-widest transition-all ${form.budget === b ? "border-accent bg-accent text-background font-bold" : "border-border hover:border-accent/50"}`}>
                                                        {b}
                                                    </button>
                                                ))}
                                            </div>
                                        </Field>

                                        <Field label="06 — Tell us about your project" error={errors.message}>
                                            <textarea value={form.message} onChange={(e) => update("message", e.target.value)} rows={4} placeholder="What are you building? What's the goal?" className="w-full bg-transparent border-b border-border pb-4 text-xl font-display focus:border-accent outline-none transition-all resize-none placeholder:opacity-30" />
                                            <div className="flex justify-between items-center mt-4">
                                                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Min 10 characters</span>
                                                <span className={`font-mono text-[10px] uppercase tracking-widest ${form.message.length > 1900 ? "text-destructive" : "text-muted-foreground"}`}>{form.message.length} / 2000</span>
                                            </div>
                                        </Field>

                                        <div className="pt-10">
                                            <Magnetic>
                                                <button
                                                    disabled={loading}
                                                    type="submit"
                                                    className="group relative inline-flex items-center gap-6 px-14 py-6 rounded-full bg-foreground text-background font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                                                >
                                                    {loading ? "Aiming..." : "Shoot the arrow"}
                                                    <svg viewBox="0 0 24 24" className="w-7 h-7 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="3.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                                                </button>
                                            </Magnetic>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
    return (
        <label className="block group">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground block mb-6 group-focus-within:text-accent transition-colors">{label}</span>
            {children}
            {error && <span className="font-mono text-[10px] text-destructive uppercase tracking-widest block mt-4 animate-rise">↳ {error}</span>}
        </label>
    );
}
