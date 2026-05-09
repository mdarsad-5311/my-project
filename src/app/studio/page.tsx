"use client";

import { useState } from "react";
import Image from "next/image";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { ArrowCursor } from "../../components/ArrowCursor";
import { Reveal } from "../../components/Reveal";

const principles = [
  { n: "01", t: "Senior-led, always", d: "Every line of code touched by an experienced engineer. No junior bench warmers." },
  { n: "02", t: "Small by design", d: "Tiny teams move faster. We stay small to stay sharp and to keep quality non-negotiable." },
  { n: "03", t: "Ship weekly", d: "Real software in production beats 200-page specs every single time." },
  { n: "04", t: "Craft over scale", d: "We turn down work that doesn't deserve our best. We'd rather build less, better." },
];

const team = [
  { 
    name: "Akif Khan", 
    role: "Founder · Engineering", 
    image: "/team/akif.png",
    bio: "Visionary leader and lead architect. Specialized in high-performance cloud infrastructure and product strategy." 
  },
  { 
    name: "Aditya Bachawe", 
    role: "Lead Designer", 
    image: "/team/aditya.png",
    bio: "Master of aesthetics and interaction. Transforming complex requirements into intuitive, premium digital experiences." 
  },
  { 
    name: "Rahul Hadpad", 
    role: "System Engineer", 
    image: "/team/rahul.png",
    bio: "Core systems specialist. Focused on scalability, reliability, and the engineering behind seamless user experiences." 
  },
];

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ArrowCursor />
      <Nav />

      <section className="pt-52 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 animate-grid" />
        <div className="relative max-w-7xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-8 animate-rise">[ Inside the studio ]</p>
          <h1 className="font-display font-black text-[clamp(3.5rem,13vw,13rem)] tracking-[-0.05em] leading-[0.82] animate-rise" style={{ animationDelay: "0.1s" }}>
            A small studio.<br/><span className="shimmer-text italic font-light">Sharp aim.</span>
          </h1>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="px-6 py-40">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-8">[ The Why ]</p>
              <h2 className="font-display font-bold text-5xl tracking-tight leading-tight">Engineering for those who refuse average.</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={200}>
              <div className="space-y-10 text-xl leading-relaxed text-muted-foreground">
                <p className="text-foreground text-3xl font-display tracking-tight leading-snug text-balance italic border-l-4 border-accent pl-10 py-4">
                  White Arrow is a global software studio based in Nashik, India. Operating as a remote-first team, we partner with founders and product teams worldwide to engineer their next chapter.
                </p>
                <p>Founded in 2026 from a simple frustration: most software is built in the middle. Average specs, average teams, average outcomes. We exist for the work that refuses average.</p>
                <p>From our home in Nashik, we bridge the gap between local craft and global scale, working with a handpicked selection of partners across timezones.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="px-6 py-40 bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 animate-grid" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-8">[ Principles ]</p>
            <h2 className="font-display font-bold text-6xl md:text-8xl tracking-tight mb-32 leading-none">How we work.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 100}>
                <div className="glass-card p-12 lg:p-16 rounded-[2.5rem] group cursor-default">
                  <div className="flex items-start justify-between mb-12">
                    <span className="font-mono text-xl text-accent font-bold">— {p.n}</span>
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 text-foreground group-hover:text-background transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-3xl lg:text-4xl tracking-tight mb-6">{p.t}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="px-6 py-40">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-8">[ The People ]</p>
            <h2 className="font-display font-bold text-6xl md:text-8xl tracking-tight mb-32 leading-none">Three. <span className="text-stroke">For now.</span></h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {team.map((m, i) => (
              <TeamMemberCard key={m.name} member={m} delay={i * 150} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

function TeamMemberCard({ member, delay }: { member: TeamMember, delay: number }) {
  const [error, setError] = useState(false);

  return (
    <Reveal delay={delay}>
      <div className="group cursor-pointer">
        <div className="aspect-[4/5] glass-card rounded-[3rem] mb-10 overflow-hidden relative flex items-center justify-center bg-muted/20">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-linear-to-br from-accent/0 to-accent/0 group-hover:from-accent/20 group-hover:to-transparent transition-all duration-1000" />
          
          {/* Image */}
          {!error && member.image && (
            <Image 
              src={member.image} 
              alt={member.name}
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              onError={() => setError(true)}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          )}

          {/* Initials Fallback */}
          {(error || !member.image) && (
            <div className="font-display font-black text-[120px] text-stroke opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 select-none">
              {member.name.split(" ").map((n: string) => n[0]).join("")}
            </div>
          )}

          <div className="absolute bottom-10 left-10 right-10 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
               <div className="w-full h-px bg-accent/30 mb-4" />
               <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Availability: Active</p>
          </div>
        </div>
        <h3 className="font-display font-bold text-3xl tracking-tight mb-2 group-hover:text-accent transition-colors">{member.name}</h3>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6">{member.role}</p>
        <p className="text-muted-foreground leading-relaxed text-balance">{member.bio}</p>
      </div>
    </Reveal>
  );
}
