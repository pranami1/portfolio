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
  {name:'mongoDB', src:'/tech/mongo.png'},
  { name: 'NodeJs', src: '/tech/nodejs.png' },
  {name:'ExpressJs', src:'/tech/expressjs.png'},
 
];
export default function SkillsDNA() {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const topInView = useInView(topRef, { once: true });



  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#1A0B2E] px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 overflow-hidden"
    >
      {/* Glowing 3D Ball Behind All Boxes */}
      <div
        className="absolute w-[280px] sm:w-[340px] md:w-[400px] h-[280px] sm:h-[340px] md:h-[400px] rounded-full blur-[100px] sm:blur-[120px] md:blur-[150px] opacity-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
        style={{
          background: `radial-gradient(circle, #ffffff 10%, #763CAC 40%, #320F85 90%)`,
          boxShadow: '0 0 40px 15px #ffffff88 sm:0 0 50px 20px #ffffff88',
        }}
      />

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 sm:mb-16 z-10 text-center">My Skills</h2>

      {/* Top 5 Skills */}
      <motion.div
        ref={topRef}
        initial={{ opacity: 0, y: 50 }}
        animate={topInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 z-10">
          {skills.slice(0, 10).map((tech) => (
            <div
              key={tech.name}
              className="w-full aspect-square bg-white/10 backdrop-blur-lg p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-500 border border-white/20 flex flex-col justify-center items-center"

            >
              <Image
                src={tech.src}
                alt={tech.name}
                width={80}
                height={80}
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-2"
              />
              <p className="text-center text-white mt-2 text-xs sm:text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
     
      </motion.div>
    </section>
  );
}
