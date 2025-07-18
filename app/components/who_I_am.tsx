'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Aboutme() {
  const boxRef = useRef(null);
  const isInView = useInView(boxRef, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <section id="about" className="relative flex flex-col items-center justify-center bg-[#1A0B2E] overflow-hidden px-4">
      <h1 className="bg-clip-text text-white text-4xl font-bold my-6">About Me</h1>

      <motion.div
        ref={boxRef}
        initial={{ x: -200, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-3xl bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20 flex flex-col my-10"
      >
        <h1 className="text-white text-2xl font-bold">Pranami Atara</h1>

        <p className="my-4 text-gray-350">
          A front-end developer blending creativity with code to build seamless, user-focused digital experiences.
          Currently expanding into full-stack development while staying grounded in design thinking and detail.
        </p>

        <p className="my-1 text-gray-400">
          I have completed my Diploma in Computer Engineering from Noble University, Junagadh, Gujarat (2022–2025),
          and I am currently pursuing my Bachelor&apos;s degree at the same institution. My current CGPA stands at 9.45.
          <br /><br />
          I possess a solid foundation in UI/UX design, problem-solving, and front-end development. Additionally,
          I have academic and practical knowledge of core programming languages and concepts including C, C++, Java, PHP, and DBMS.
          <br /><br />
          I bring a blend of technical expertise and creative thinking, with a keen interest in building efficient, user-centric digital solutions.
          I&apos;m not just building projects — I&apos;m building the future version of myself with every line of code.
        </p>
      </motion.div>
    </section>
  );
}
