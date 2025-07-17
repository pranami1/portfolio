'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const skills = [
  { name: 'HTML', src: '/tech/html.png' },
  { name: 'CSS', src: '/tech/css.png' },
  { name: 'JS', src: '/tech/js.png' },
  { name: 'Figma', src: '/tech/Figma.png' },
  { name: 'React', src: '/tech/react.png' },
  { name: 'Tailwind', src: '/tech/tailwind.png' },
  { name: 'NextJs', src: '/tech/NextJs.png' },
  { name: 'Firebase', src: '/tech/firebase.png' },
];
export default function SkillsDNA() {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const topInView = useInView(topRef, { once: true });
  const bottomInView = useInView(bottomRef, { once: true });


  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#1A0B2E] px-4 overflow-hidden"
    >
      {/* Glowing 3D Ball Behind All Boxes */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[150px] opacity-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
        style={{
          background: `radial-gradient(circle, #ffffff 10%, #763CAC 40%, #320F85 90%)`,
          boxShadow: '0 0 60px 20px #ffffff88',
        }}
      />

      {/* Heading */}
      <h2 className="text-4xl font-bold text-white mb-16 z-10">My Skills</h2>

      {/* Top 4 Skills */}
      <motion.div
        ref={topRef}
        initial={{ opacity: 0, y: 50 }}
        animate={topInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}

      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 z-10">
          {skills.slice(0, 4).map((tech) => (
            <div
              key={tech.name}
              className="w-40 h-40 bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-500 border border-white/20 flex flex-col justify-center items-center"

            >
              <Image
                src={tech.src}
                alt={tech.name}
                width={80}       // Required
                height={80}      // Required
                className="w-20 h-20 mx-auto mb-2"
              />

              <p className="text-center text-white mt-2 text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom 4 Skills */}
      <motion.div
        ref={bottomRef}
        initial={{ opacity: 0, y: 50 }}
        animate={bottomInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}

      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 z-10">
          {skills.slice(4, 8).map((tech) => (
            <div
              key={tech.name}
              className="w-40 h-40 bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-500 border border-white/20 flex flex-col justify-center items-center"

            >
            
              <Image
                src={tech.src}
                alt={tech.name}
                width={80}       // Required
                height={80}      // Required
                className="w-18 h-20 mx-auto mb-2"
              />
              <p className="text-center text-white mt-2 text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
