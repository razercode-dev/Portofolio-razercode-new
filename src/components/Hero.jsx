
import { motion } from "framer-motion"
const Hero = () => {
  return (
    
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center  py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
        initial={{y: -50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.2}}
        
        
        >
          <img
            src="/images.JPG" // path from public folder
            alt="Hero"
            className="w-[300px] justify-items-center items-center cursor-pointer rounded-full shadow-xl shadow-teal-900 transition-all
            duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-teal-600 md:w-[250px] mt-4" 
          />
        </motion.div>

        <motion.div
        initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.2}}
         className="flex max-w-[600px] flex-col items-center
        justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-cyan-500 to-gray-500 bg-clip-text text-transparent
        opacity-80 text-5xl font-light transition-all duration-300 hover:opacity-100 md:text-7xl">Sultan Ahmad</h1>
          <h3 className="bg-gradient-to-r from-gray-500 to-cyan-500 bg-clip-text text-transparent
        opacity-80 text-2xl font-light transition-all duration-300 hover:opacity-100 md:text-3xl">Web Developer</h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">I&apos;m a student for SMK studying in Computer and Network Engineering (TKJ) I&apos;m passionate about web development and troubleshooting, especially build a mini projects and debug journey i&apos;ve building a carrier for my learning map.</p>
        </motion.div>
      </div>

      
    </div>
  );
};

export default Hero;


