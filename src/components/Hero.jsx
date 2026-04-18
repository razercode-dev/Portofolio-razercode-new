import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex flex-col-reverse items-center justify-center w-full min-h-screen gap-10 px-6 py-20 overflow-hidden md:flex-row md:px-16 lg:px-32"
    >

      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/10 blur-3xl rounded-full top-1/3 left-1/2 -translate-x-1/2"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none -z-10">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex max-w-[600px] flex-col items-center text-center md:items-start md:text-left gap-4"
      >
        <h1 className="relative text-5xl md:text-7xl text-white font-[Cinzel] tracking-wide">
          Sultan{" "}
          <span className="text-slate-400  drop-shadow-[0_0_14px_rgba(148,163,184,0.9)]">
            Ahmad
          </span>
        </h1>

        <h3 className="tracking-[0.2em] text-2xl md:text-3xl font-[EB_Garamond] italic text-white/90">
          Web Developer
        </h3>

        <p className="font-[EB_Garamond] text-sm md:text-base text-white/80 leading-relaxed">
          I&apos;m a student for SMK studying in Computer and Network Engineering (TKJ).
          I&apos;m passionate about web development and troubleshooting, especially building mini projects.
        </p>
      </motion.div>

    <motion.div
  initial={{ x: 50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="relative flex items-center justify-center mt-6 md:mt-0"
>
  <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-2xl"></div>

  <img
    src="/profile.jpg"
    alt="Hero"
    className="
    relative w-[220px] md:w-[300px]
    rounded-full border border-white/10
    shadow-[0_0_40px_rgba(100,150,255,0.35)]
    transition duration-300
    hover:scale-105 hover:-translate-y-3
    "
  />
</motion.div>

      <div className="absolute flex flex-col items-center justify-center w-full bottom-10">

        <span className="mb-2 text-xs tracking-[0.3em] text-white/50 drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
          SCROLL
        </span>

        <div className="relative w-[2px] h-16 bg-white/10 overflow-hidden rounded-full">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-300 rounded-full animate-soulDrop shadow-[0_0_12px_rgba(147,197,253,0.9)]"></div>
        </div>

      </div>
    </div>
  );
};

export default Hero;