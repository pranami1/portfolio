import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-line",
        { width: 0 },
        {
          width: "100%",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        ".about-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 85%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        <p className="section-heading">// about me</p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Pranami <span className="text-gradient">Atara</span>
        </h2>
        <div className="about-line h-px bg-gradient-to-r from-primary/60 to-transparent mb-12" />

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          <div className="about-card skill-card">
            <div className="font-mono text-xs text-primary mb-3">{"/* background */"}</div>
            <p className="text-secondary-foreground leading-relaxed">
              A front-end developer blending creativity with code to build seamless, user-focused digital
              experiences. Currently expanding into full-stack development while staying grounded in design
              thinking and detail.
            </p>
          </div>

          <div className="about-card skill-card">
            <div className="font-mono text-xs text-primary mb-3">{"/* education */"}</div>
            <p className="text-secondary-foreground leading-relaxed">
              Completed Diploma in Computer Engineering from Noble University, Junagadh, Gujarat (2022–2025).
              Currently pursuing Bachelor's degree at the same institution. Current CGPA: <span className="text-primary font-semibold">9.45</span>
            </p>
          </div>

          <div className="about-card skill-card">
            <div className="font-mono text-xs text-primary mb-3">{"/* technical foundation */"}</div>
            <p className="text-secondary-foreground leading-relaxed">
              Solid foundation in UI/UX design, problem-solving, and front-end development. Academic and
              practical knowledge of C, C++, Java, PHP, and DBMS.
            </p>
          </div>

          <div className="about-card skill-card">
            <div className="font-mono text-xs text-primary mb-3">{"/* philosophy */"}</div>
            <p className="text-secondary-foreground leading-relaxed">
              I bring a blend of technical expertise and creative thinking, with a keen interest in building
              efficient, user-centric digital solutions. I'm not just building projects — I'm building the
              future version of myself with every line of code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
