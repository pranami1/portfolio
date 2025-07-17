'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type ProjectCardProps = {
  proj: {
    title: string;
    desc: string;
    github: string;
    demo?: string;
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

  return (
    <motion.div
      ref={ref}
      initial={{ x: fromLeft ? -100 : 100, opacity: 0 }}
      animate={animation}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 * index }}
      className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 max-w-xs w-full transform transition-transform duration-450 hover:scale-105"
    >
      <h3 className="text-xl font-semibold text-white mb-2">{proj.title}</h3>
      <p className="text-gray-300 mb-4">{proj.desc}</p>
      <div className="flex gap-4">
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
    </motion.div>
  );
}
