import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoBootstrap,
  BiLogoNodejs,
} from "react-icons/bi";

import { motion } from "framer-motion";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const techs = [
    { icon: BiLogoReact, name: "React" },
    { icon: BiLogoJavascript, name: "JavaScript" },
    { icon: BiLogoTailwindCss, name: "Tailwind" },
    { icon: BiLogoHtml5, name: "HTML" },
    { icon: BiLogoCss3, name: "CSS" },
    { icon: BiLogoBootstrap, name: "Bootstrap" },
    { icon: BiLogoNodejs, name: "Node.js" },
  ];

  return (
    <div
      id="technology"
      className="relative flex min-h-[80vh] w-full flex-col items-center justify-center gap-16 px-6 md:gap-24"
    >
      {/* 🌫️ BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full top-20 left-1/2 -translate-x-1/2"></div>
      </div>

      {/* 🧿 TITLE */}
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl md:text-6xl text-white font-[Cinzel] tracking-wide"
      >
        Technologies
      </motion.h1>

      {/* ⚡ GRID */}
      <div className="grid w-full max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {techs.map((tech, i) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={i}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative flex flex-col items-center justify-center p-6 rounded-xl 
              bg-white/5 border border-white/10 backdrop-blur-md
              hover:border-blue-400/40
              hover:shadow-[0_0_25px_rgba(100,150,255,0.25)]
              transition duration-300"
            >
              {/* ✨ INNER GLOW */}
              <div className="absolute inset-0 transition opacity-0 rounded-xl bg-blue-400/10 blur-xl group-hover:opacity-100"></div>

              {/* 🧿 ICON */}
              <Icon
                className="text-[50px] md:text-[60px] text-white relative z-10 
                transition duration-300 
                group-hover:-translate-y-1 
                group-hover:text-blue-300"
              />

              {/* 🔤 LABEL */}
              <p className="mt-3 text-sm text-white/80 font-[EB_Garamond] relative z-10">
                {tech.name}
              </p>

              {/* 📊 LEVEL BAR */}
              <div className="w-full h-[2px] bg-white/10 mt-3 overflow-hidden rounded">
                <div className="h-full bg-blue-400 w-[70%] group-hover:w-[90%] transition-all duration-500"></div>
              </div>

              {/* 💬 TOOLTIP */}
              <div className="absolute px-2 py-1 text-xs text-white transition rounded opacity-0 pointer-events-none -top-8 bg-black/70 group-hover:opacity-100">
                {tech.name} Skill
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Tech;