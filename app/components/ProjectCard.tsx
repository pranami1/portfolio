'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type ProjectCardProps = {
  proj: {
    title: string;
    desc: string;
    github: string;
    demo?: string;
    featured?: boolean;
  };
  index: number;
};

export default function ProjectCard({ proj, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const fromLeft = index < 3;
  const animation = isInView
    ? { x: 0, opacity: 1 }
    : { x: fromLeft ? -100 : 100, opacity: 0 };

  const featuredStyle = proj.featured
    ? 'sm:col-span-2 lg:col-span-3 bg-gradient-to-r from-purple-700/50 to-indigo-700/50 scale-[1.02]'
    : '';

  return (
    <motion.div
      ref={ref}
      initial={{ x: fromLeft ? -100 : 100, opacity: 0 }}
      animate={animation}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 * index }}
      className={`bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 w-full transform transition-transform duration-450 hover:scale-105 ${featuredStyle}`}
    >
      <h3 className="text-2xl font-semibold text-white mb-2">{proj.title}</h3>
      <p className="text-gray-300 mb-6">{proj.desc}</p>

      {/* Conditional btn */}
      {proj.featured ? (
        // Only one button for featured project
        <a
          href={proj.github} // live site link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:scale-105 transition"
        >
          View Site
        </a>
      ) : (
        // Normal buttons for other projects
        <div className="flex gap-4 flex-wrap">
          <a
            href={proj.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium shadow-md hover:scale-105 transition"
          >
            View Code
          </a>
         
          {proj.demo && (
            <a
              href={proj.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-500 text-purple-300 px-4 py-2 rounded-lg font-medium hover:bg-purple-700/30 transition hover:scale-105"
            >
              Watch Demo
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
