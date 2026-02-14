import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".exp-content",
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
      gsap.fromTo(
        ".exp-timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <p className="section-heading">// experience</p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-16">
          Where I've <span className="text-gradient">Worked</span>
        </h2>

        <div className="relative flex gap-8 max-w-3xl">
          {/* Timeline line */}
          <div className="relative flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-primary neon-glow z-10" />
            <div className="exp-timeline-line w-px flex-1 bg-gradient-to-b from-primary/60 to-primary/10 origin-top" />
          </div>

          {/* Content */}
          <div className="exp-content pb-12">
            <div className="skill-card">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-xl font-bold text-foreground">Web Development Intern</h3>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Zaalima Development
                </span>
              </div>
              <p className="font-mono text-xs text-muted-foreground mb-4">
                Remote &nbsp;|&nbsp; Jul 2025 — Oct 2025
              </p>
              <p className="text-secondary-foreground leading-relaxed mb-4">
                Worked on building dynamic and responsive web applications using MERN technologies
                (MongoDB, Express.js, React, Node.js). Contributed to both frontend and backend development,
                focusing on creating smooth user experiences and efficient data handling.
              </p>
              <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  Designed UI components & integrated APIs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  Managed databases & optimized performance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  Collaborated effectively within dev team
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
