
'use client';

import ProjectCard from './ProjectCard';

export default function Project() {
  const projects = [
    {
      title: 'Recipe App',
      desc: 'A dynamic web application that lets users search for recipes and instantly view ingredients using a real-time API. Built with HTML, CSS, and JavaScript to deliver a fast, clean, and user-friendly experience.',
      github: 'https://github.com/pranami1/Recipe-app-',
      demo: 'https://youtu.be/tdbt_pYhRSo',
    },
    {
      title: 'Browser Extension',
      desc: 'A custom browser extension built with HTML, CSS, JavaScript, and a manifest JSON file. It offers smooth light/dark theme toggling and enhances user interaction directly from the browser toolbar.',
      github: 'https://github.com/pranami1/browser-extentions',
      demo: 'https://youtu.be/wTnhkorwMKA',
    },
    {
      title: 'Snake, Water, Gun Game',
      desc: 'A classic hand-gesture game recreated for the web using HTML, CSS, and JavaScript. This interactive project lets users play against the computer with real-time feedback and dynamic styling.',
      github: 'https://github.com/pranami1/Sneak-water-gun-game',
      demo: 'https://youtu.be/xdWR2tobg54',
    },
    {
      title: 'Netflix Clone',
      desc: 'A fully responsive Netflix front-end clone built using only HTML and CSS during the first year of my diploma in Computer Science. This project replicates the original platform’s layout, hover effects, and mobile-friendly design — created as one of my first UI/UX learning experiments.',
      github: 'https://github.com/pranami1/Netflix-clone',
    },
    {
      title: 'My Blog App',
      desc: 'A clean and responsive blog listing app built with Next.js, Tailwind CSS, and TypeScript. It features a blog search function, light/dark theme toggle, and a user-friendly interface designed for smooth reading and discovery.',
      github: 'https://github.com/pranami1/my-blog-app',
    },
    {
      title: 'Amazon Clone',
      desc: 'A front-end clone of Amazon crafted using HTML and CSS, replicating its homepage layout and styling. This project demonstrates responsive design, product section structuring, and clean UI alignment.',
      github: 'https://github.com/pranami1/Amazon-clone',
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#1A0B2E] px-6 overflow-hidden"
    >
      <h1 className="text-4xl font-bold text-white my-20">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
        {projects.map((proj, index) => (
          <ProjectCard key={index} proj={proj} index={index} />
        ))}
      </div>
    </section>
  );
}
