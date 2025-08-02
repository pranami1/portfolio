import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Contectme() {
  return (
    
    <section
      id="contact"
      className="relative flex items-center justify-center bg-[#1A0B2E] px-6  overflow-hidden my-30"
    >
       

      {/* Container to separate left and right */}
      <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl">
        
        {/* Left Side: Name + Title */}
        <div className="mb-10 md:mb-0">
          <h1 className="font-bold text-3xl bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
            Pranami Atara
          </h1>
          <p className="text-white mt-2 text-sm">Full Stack Web Developer</p>
        </div>

        {/* Right Side: Icons + Email + Phone */}
        <div className="flex flex-col items-start gap-4 text-white">
          {/* Icons */}
          <div className="flex gap-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/pranami-atara-6598752a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-90 transition-transform duration-200"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/pranami1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-90 transition-transform duration-200"
            >
              <FaGithub />
            </a>
          </div>

          {/* Email & Phone */}
          <div className="text-sm">
            <p className="flex items-center gap-2">
              <MdEmail className="text-white/80" /> pranamiatara@gmail.com
            </p>
            
          </div>
        </div>
      </div>
    

    </section>
  );
}
