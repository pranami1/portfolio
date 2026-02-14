import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    if (isGlitching && containerRef.current) {
      const layers = containerRef.current.querySelectorAll(".glitch-layer");
      layers.forEach((layer, i) => {
        gsap.to(layer, {
          x: (i === 0 ? -1 : 1) * (Math.random() * 8),
          y: Math.random() * 4 - 2,
          duration: 0.05,
          yoyo: true,
          repeat: 3,
          onComplete: () => gsap.set(layer, { x: 0, y: 0 }),
        });
      });
    }
  }, [isGlitching]);

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span
        className="glitch-layer absolute inset-0 text-[hsl(var(--accent))] opacity-70"
        style={{ clipPath: "inset(10% 0 60% 0)" }}
        aria-hidden
      >
        {text}
      </span>
      <span
        className="glitch-layer absolute inset-0 text-[hsl(var(--destructive))] opacity-50"
        style={{ clipPath: "inset(50% 0 20% 0)" }}
        aria-hidden
      >
        {text}
      </span>
    </div>
  );
};

export default GlitchText;
