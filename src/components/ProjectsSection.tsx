import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Framerz Media Agency Site",
    desc: "Built a sleek, fully responsive website for Framerz Media, a professional video editing agency. Focused on smooth, user-friendly experience with modern design and interactive elements.",
    tech: ["React", "Next.js", "Tailwind"],
    links: { live: "https://framerzmedia.com/" },
    featured: true,
  },
  {
    title: "Gig-Connect Platform",
    desc: "MERN-stack freelancing platform that connects clients and freelancers. Users can create profiles, post jobs, apply for work, and manage application status.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    links: { live: "https://gig-connect-inky.vercel.app/" },
    featured: true,
  },
  {
    title: "Recipe App",
    desc: "Dynamic web app that lets users search for recipes and instantly view ingredients using a real-time API.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    links: {
      code: "https://github.com/pranami1/Recipe-app-",
      demo: "https://youtu.be/tdbt_pYhRSo",
    },
  },
  {
    title: "Browser Extension",
    desc: "Custom browser extension with smooth light/dark theme toggling, enhancing user interaction from the browser toolbar.",
    tech: ["HTML", "CSS", "JS", "Manifest"],
    links: {
      code: "https://github.com/pranami1/browser-extentions",
      demo: "https://youtu.be/wTnhkorwMKA",
    },
  },
  {
    title: "My Blog App",
    desc: "Clean and responsive blog listing app with search, light/dark theme toggle, and a user-friendly interface.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    links: { code: "https://github.com/pranami1/my-blog-app" },
  },
  {
    title: "Netflix Clone",
    desc: "Fully responsive Netflix front-end clone replicating the original layout, hover effects, and mobile-friendly design.",
    tech: ["HTML", "CSS"],
    links: { code: "https://github.com/pranami1/Netflix-clone" },
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-item",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative py-32">
      <div className="absolute inset-0 dot-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <p className="section-heading">// projects</p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-16">
          Things I've <span className="text-gradient">Built</span>
        </h2>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <div key={project.title} className="project-item project-card p-8 group">
                <div className="font-mono text-xs text-primary mb-2">{"// featured project"}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-primary hover:underline"
                    >
                      View Site ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <div key={project.title} className="project-item project-card p-6 group">
                <div className="font-mono text-xs text-muted-foreground mb-3">📁</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono text-[10px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.links.code && (
                    <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-primary hover:underline">
                      Code ↗
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-primary hover:underline">
                      Demo ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
