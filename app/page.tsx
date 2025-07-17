'use client';
import Navbar from './components/Navbar';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import SkillsDNA from './components/skilss';
import Aboutme from './components/who_I_am';
import Project from './components/project';
import Contect_me from './components/contect';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';


export default function Home() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <main className="relative bg-[#1A0B2E] min-h-screen overflow-x-hidden cursor-none">
      {/*  Dot Cursor */}
      <div
        className="fixed z-[9999] w-3.5 h-3.5 bg-white/80 rounded-full pointer-events-none transition-transform duration-75"
        style={{
          top: cursor.y,
          left: cursor.x,
          transform: 'translate(-50%, -50%)',
        }}
      />
      {/* Blurred Background Dot */}
      <div className="absolute w-72 h-72 bg-[#763CAC] shadow-lg shadow-pink-200 opacity-70 rounded-full blur-[120px] top-10 left-10 z-0" />

      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="z-10 flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 gap-8 text-center md:text-left"
      >
        <div className="flex-1 ml-20">
          <motion.div
            className="flex-1 ml-10"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >

            {/* <h1 className="text-4xl md:text-6xl font-bold text-white">
              Hello, I'm <span className="text-[#FF80B5]">Pranami</span>
            </h1> */}
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Hello, I'm{' '}
              <motion.span
                className="text-blue-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Typewriter
                  words={['Pranami']}
                  loop={false}
                  cursor
                  cursorStyle="|" // slim vertical bar
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </motion.span>
            </h1>



            <p className="mt-4 text-4xl md:text-3xl font-bold text-white max-w-xl mx-auto md:mx-0">
              Full Stack Web Developer..!
            </p>
            <p className='mt-4 text-lg text-white max-w-xl'>
              I&apos;m on a journey of becoming a powerful full-stack developer — learning deeply, building passionately, and pushing myself to create digital experiences that feel personal and impactful.
            </p>


            <div className="flex gap-6 mt-6 text-2xl text-white">
              <a
                href="https://www.linkedin.com/in/pranami-atara-6598752a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-150 transition-transform duration-200"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/pranami1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-150 transition-transform duration-200 "
              >
                <FaGithub />
              </a>

            </div>
          </motion.div>
        </div>

        <div className="flex-1 flex justify-center ">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >


            <Image
              src="/pranami1.png"
              alt="Pranami"
              width={320}
              height={400}
              className="w-80 md:w-80 h-[400px] rounded-full shadow-lg shadow-blue-300 animate-slideUp transition-transform duration-500 hover:scale-105"
            />

          </motion.div>
        </div>

      </section>

      {/* <div className="absolute inset-0 flex items-center justify-center z-0"/> */}
      <SkillsDNA />

      <Aboutme />

      <Project />



      <Contect_me />



    </main >

  );
}
