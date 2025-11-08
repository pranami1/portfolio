'use client';
import { useState } from 'react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Experience() {
  const [showCertificate, setShowCertificate] = useState(false);
    const boxRef = useRef(null);
     const isInView = useInView(boxRef, { once: true, margin: '0px 0px -100px 0px' });
  return (
    <section
      id="experience"
      className="relative flex flex-col items-center justify-center bg-[#1A0B2E] overflow-hidden px-4 mt-20 mb-20"
    >
        <motion.div
        ref={boxRef}
        initial={{ x: 200, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-3xl bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20 flex flex-col my-10"
      >
      <h1 className="bg-clip-text text-white text-4xl font-bold my-6">Experience</h1>

      <div className="w-full max-w-3xl bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20 flex flex-col my-10">
        <h2 className="text-white text-2xl font-bold">
          Web Development Intern - Zaalima Development
        </h2>

        <p className="text-gray-400 mt-2">Remote | 25-07-2025 to 25-10-2025</p>

        <p className="my-4 text-gray-300">
          During my internship as a <span className="font-semibold text-white">Web Developer</span>, I worked on building dynamic and responsive web applications using 
          <span className="font-semibold text-white"> MERN technologies</span> (MongoDB, Express.js, React, Node.js). 
          I contributed to both frontend and backend development, focusing on creating smooth user experiences 
          and efficient data handling.
          <br /><br />
          My responsibilities included designing UI components, integrating APIs, managing databases, 
          and optimizing overall performance. This experience gave me hands-on exposure to real-world projects, 
          strengthened my problem-solving skills, and taught me to collaborate effectively within a development team.
          <br /><br />
          It was a transformative journey that helped me grow from simply learning web development to 
          <span className="font-semibold text-white"> building impactful, full-stack applications</span> with confidence and purpose.
        </p>

        {/* View Certificate btn */}
        <button
          onClick={() => setShowCertificate(true)}
          className="mt-4 self-start text-sm text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-all"
        >
          View Certificate
        </button>
      </div>

      {/* Certificate  */}
      {showCertificate && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative bg-white/10 border border-white/20 p-4 rounded-2xl max-w-3xl w-[90%]">
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute top-2 right-3 text-white text-lg font-bold hover:text-purple-400"
            >
              ✕
            </button>
            <iframe
              src="/certificate.pdf" 
              title="Internship Certificate"
              className="rounded-lg  shadow-lg w-full h-[80vh] "
             
            />
          </div>
        </div>
      )}
      </motion.div>
    </section>
  );
}
