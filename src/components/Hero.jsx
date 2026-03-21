
import { motion } from "framer-motion"
const Hero = () => {
  return (
<div
  id="home"
  className="flex flex-col-reverse items-center justify-center w-full min-h-screen gap-10 px-6 py-20 md:flex-row md:px-16 lg:px-32"
>

  {/* LEFT - TEXT */}
  <motion.div
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="flex max-w-[600px] flex-col items-center text-center md:items-start md:text-left gap-4"
  >
    <h1 className="text-5xl font-light text-white md:text-7xl">
      Sultan <span className="text-cyan-400">Ahmad</span>
    </h1>

    <h3 className="text-2xl font-light text-white md:text-3xl">
      Web Developer
    </h3>

    <p className="text-sm text-white/80 md:text-base">
      I&apos;m a student for SMK studying in Computer and Network Engineering (TKJ).
      I&apos;m passionate about web development and troubleshooting, especially building mini projects.
    </p>
  </motion.div>

  {/* RIGHT - IMAGE */}
  <motion.div
    initial={{ x: 50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="relative"
  >
    <img
      src="/images.JPG"
      alt="Hero"
      className="w-[220px] md:w-[300px] rounded-full shadow-[0_0_40px_rgba(45,212,191,0.5)] transition-all duration-300 hover:scale-105 hover:-translate-y-3"
    />

    {/* Glow effect */}
    <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl"></div>
  </motion.div>

</div>
  );
};

export default Hero;
