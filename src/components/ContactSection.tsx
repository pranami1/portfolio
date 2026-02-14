import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-content",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="contact-content">
          <p className="section-heading">// get in touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question, a project idea - let's connect! Feel free to reach out via email or connect with me on LinkedIn and GitHub.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* <a
              href="mailto:pranamiatara@gmail.com"
              className="neon-border rounded-lg px-8 py-3 font-mono text-sm text-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_30px_hsl(142_72%_50%/0.2)]"
            >
              Say Hello ✉️
            </a> */}
            <a
              href="https://www.linkedin.com/in/pranami-atara-6598752a5"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-border rounded-lg px-8 py-3 font-mono text-sm text-primary hover:bg-primary/10 transition-all duration-300"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/pranami1"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-border rounded-lg px-8 py-3 font-mono text-sm text-primary hover:bg-primary/10 transition-all duration-300"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative mt-32 border-t border-border pt-8 max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            {"<"} Built with 💚 by <span className="text-primary">Pranami Atara</span> {"/>"}
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} — All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
