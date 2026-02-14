import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import pranamiImg from "@/assets/pranami.png";
import MatrixRain from "./MatrixRain";
import GlitchText from "./GlitchText";
import useTextScramble from "@/hooks/useTextScramble";

const STATUS_LINES = [
  { label: "STATUS", value: "ONLINE", color: "text-primary" },
  { label: "ROLE", value: "Web DEV", color: "text-accent" },
  { label: "LOCATION", value: "INDIA", color: "text-foreground" },
  { label: "OPEN_TO_WORK", value: "TRUE", color: "text-primary" },
];

const TerminalLine = ({
  text,
  delay,
  prefix = "$",
}: {
  text: string;
  delay: number;
  prefix?: string;
}) => {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCursor(true);
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 500);
        }
      }, 30 + Math.random() * 20);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <div className="font-mono text-xs sm:text-sm leading-relaxed">
      <span className="text-primary">{prefix}</span>{" "}
      <span className="text-muted-foreground">
        {displayed}
        {showCursor && (
          <span className="text-primary animate-pulse">▋</span>
        )}
      </span>
    </div>
  );
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);

  const scrambledName = useTextScramble("PRANAMI", 1200);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    // Scan line sweep
    tl.fromTo(
      scanLineRef.current,
      { top: "0%" },
      { top: "100%", duration: 1.5, ease: "power2.inOut" }
    );

    // Left panel slides in
    tl.fromTo(
      leftPanelRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      0.8
    );

    // Divider grows
    tl.fromTo(
      dividerRef.current,
      { scaleY: 0 },
      { scaleY: 1, duration: 0.6, ease: "power2.out" },
      1.0
    );

    // Right panel with image
    tl.fromTo(
      rightPanelRef.current,
      { x: 100, opacity: 0, filter: "blur(20px)" },
      { x: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power3.out" },
      1.0
    );

    // Status bars
    tl.fromTo(
      statusRef.current?.children ? Array.from(statusRef.current.children) : [],
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: "power2.out" },
      1.4
    );

    // CTA
    tl.fromTo(
      ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      1.8
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Scan line effect on load */}
      <div
        ref={scanLineRef}
        className="absolute left-0 right-0 h-1 bg-primary/60 blur-sm z-20 pointer-events-none"
        style={{ boxShadow: "0 0 30px 10px hsl(142 72% 50% / 0.3)" }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none z-[1]" />

      {/* Corner brackets */}
      <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-primary/40 z-10" />
      <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-primary/40 z-10" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-primary/40 z-10" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-primary/40 z-10" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-0 items-center min-h-[70vh]">
          {/* Left Panel - Terminal */}
          <div ref={leftPanelRef} className="space-y-6 lg:pr-12">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-primary/80" />
              <span className="ml-3 font-mono text-[10px] text-muted-foreground tracking-widest">
                ~/pranami/portfolio
              </span>
            </div>

            {/* Terminal lines */}
            <div className="space-y-2 border border-border/50 rounded-lg p-4 bg-background/50 backdrop-blur-sm">
              <TerminalLine text="whoami" delay={1500} prefix="$" />
              <div className="pl-4 mt-1">
                <TerminalLine
                  text="Pranami Atara — Full Stack Developer"
                  delay={2200}
                  prefix="→"
                />
              </div>
              <TerminalLine text="cat mission.txt" delay={3200} prefix="$" />
              <div className="pl-4 mt-1">
                <TerminalLine
                  text="Building digital experiences that feel alive."
                  delay={4000}
                  prefix="→"
                />
              </div>
              <TerminalLine text="node passion.js --execute" delay={5000} prefix="$" />
              <div className="pl-4 mt-1">
                <TerminalLine
                  text="✓ Passion: running at 100%..."
                  delay={5800}
                  prefix="→"
                />
              </div>
            </div>

            {/* Name with glitch */}
            <div>
              <p className="font-mono text-xs text-muted-foreground tracking-[0.3em] mb-2 uppercase">
                {"// identity.verified"}
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none">
                <span className="text-foreground/60 text-2xl sm:text-3xl font-light block mb-1">
                  Hello, I'm
                </span>
                <GlitchText
                  text={scrambledName}
                  className="text-gradient neon-glow font-mono"
                />
                <span className="text-primary animate-pulse text-4xl">_</span>
              </h1>
            </div>

            {/* Status indicators */}
            <div ref={statusRef} className="space-y-2 mt-6">
              {STATUS_LINES.map((line) => (
                <div
                  key={line.label}
                  className="flex items-center gap-3 font-mono text-xs"
                >
                  <span className="text-muted-foreground w-28 text-right">
                    {line.label}:
                  </span>
                  <div className="h-px flex-1 max-w-12 bg-border" />
                  <span className={line.color}>{line.value}</span>
                  {line.label === "STATUS" && (
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  )}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div ref={ctaRef} className="flex items-center gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/pranami-atara-6598752a5"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden neon-border rounded-lg px-6 py-3 font-mono text-sm text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <span className="relative z-10">LinkedIn ↗</span>
                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a
                href="https://github.com/pranami1"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden neon-border rounded-lg px-6 py-3 font-mono text-sm text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <span className="relative z-10">GitHub ↗</span>
                <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a
                href="#projects"
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4 decoration-primary/30"
              >
                ./projects →
              </a>
            </div>
          </div>

          {/* Center Divider */}
          <div
            ref={dividerRef}
            className="hidden lg:flex flex-col items-center gap-3 origin-top px-6"
          >
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
            <div className="w-3 h-3 border border-primary/50 rotate-45" />
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
          </div>

          {/* Right Panel - Holographic Photo */}
          <div ref={rightPanelRef} className="flex justify-center lg:justify-center mt-8 lg:mt-0">
            <div className="relative">
              {/* Holographic scan lines over photo */}
              <div className="absolute inset-0 z-20 pointer-events-none rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(142 72% 50% / 0.03) 2px, hsl(142 72% 50% / 0.03) 4px)",
                  }}
                />
                {/* Animated scan bar */}
                <div
                  className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-primary/10 to-transparent"
                  style={{
                    animation: "scanMove 4s ease-in-out infinite",
                  }}
                />
              </div>

              {/* Glow behind */}
              <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-3xl animate-pulse" style={{ animationDuration: "5s" }} />

              {/* Photo frame */}
              <div className="relative neon-border rounded-2xl overflow-hidden w-64 h-80 sm:w-72 sm:h-96 lg:w-96 lg:h-[30rem] group">
                <img
                  src={pranamiImg}
                  alt="Pranami Atara - Full Stack Developer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "contrast(1.03) saturate(1.05)" }}
                />
                {/* Color overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-primary/5 transition-opacity duration-500" />

                {/* HUD overlay corners */}
                <div className="absolute top-3 left-3 w-6 h-6 border-l border-t border-primary/60" />
                <div className="absolute top-3 right-3 w-6 h-6 border-r border-t border-primary/60" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-l border-b border-primary/60" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-primary/60" />

                {/* Code overlay at bottom */}
                <div className="absolute bottom-4 left-4 right-4 font-mono text-[10px] text-primary/70 leading-relaxed">
                  <p className="text-accent/50">{"// pranami.config.ts"}</p>
                  <p>export const dev = {"{"}</p>
                  <p>&nbsp;&nbsp;name: <span className="text-accent">"Pranami"</span>,</p>
                  <p>&nbsp;&nbsp;passion: <span className="text-primary">Infinity</span>,</p>
                  <p>&nbsp;&nbsp;status: <span className="text-primary">"building"</span></p>
                  <p>{"}"}</p>
                </div>
              </div>

              {/* Decorative tech card (fills right-side gap on large screens) */}
              <div className="hidden lg:flex flex-col gap-3 absolute -right-36 top-6 w-40">
                <div className="bg-background/60 border border-border/30 rounded-lg p-3 backdrop-blur-sm shadow-lg">
                  <p className="text-[11px] font-mono text-muted-foreground mb-2">Tech stack</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/5 text-primary text-[11px] rounded-md font-mono">React</span>
                    <span className="px-2 py-1 bg-accent/5 text-accent text-[11px] rounded-md font-mono">TypeScript</span>
                    <span className="px-2 py-1 bg-foreground/5 text-foreground text-[11px] rounded-md font-mono">Vite</span>
                    <span className="px-2 py-1 bg-accent/5 text-accent text-[11px] rounded-md font-mono">Next.js</span>
                  </div>
                </div>
                <div className="bg-background/60 border border-border/30 rounded-lg p-2 text-[11px] font-mono text-muted-foreground text-center">
                  Projects • Contact
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 font-mono text-[10px] text-primary/40 border border-primary/20 rounded px-2 py-1">
                v2.0.26
              </div>
              <div className="absolute -bottom-3 -left-3 font-mono text-[10px] text-muted-foreground/40 border border-border/30 rounded px-2 py-1">
                ⚡ 99ms
              </div>
              <div className="absolute top-1/3 -right-8 writing-vertical font-mono text-[10px] text-primary/30">
                {"<developer />"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="font-mono text-[10px] text-muted-foreground tracking-[0.3em]">
          SCROLL
        </span>
        <div className="w-4 h-7 rounded-full border border-primary/30 flex items-start justify-center p-1">
          <div className="w-0.5 h-1.5 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
