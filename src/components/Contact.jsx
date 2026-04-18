import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative flex min-h-[80vh] w-full flex-col items-center justify-center px-6 py-20 overflow-hidden"
    >

      {/* 🌫️ BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* ✨ PARTICLES */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-6 max-w-[700px] text-center">

        {/* 🧿 TITLE */}
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-[Cinzel] text-white tracking-wide"
        >
          Get in{" "}
          <span className="text-slate-400 drop-shadow-[0_0_12px_rgba(148,163,184,0.8)]">
            Touch
          </span>
        </motion.h1>

        {/* 📝 TEXT */}
        <motion.p
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm md:text-base text-white/70 font-[EB_Garamond] leading-relaxed"
        >
          I&apos;m currently open to new opportunities and collaborations.
          Whether you have a project in mind, want to discuss ideas, or just
          say hello — feel free to reach out.
        </motion.p>

        {/* 📧 EMAIL */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-blue-300 text-sm md:text-base tracking-wide"
        >
          razersyzen@gmail.com
        </motion.p>

        {/* ⚡ BUTTON */}
        <motion.a
          href="mailto:razersyzen@gmail.com"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="
          relative px-6 py-3 text-sm md:text-base font-semibold text-white
          border border-white/20 rounded-lg
          bg-white/5 backdrop-blur-md
          overflow-hidden
          hover:border-blue-400/40
          hover:shadow-[0_0_20px_rgba(100,150,255,0.3)]
          transition duration-300
          "
        >
          Contact Me

          {/* glow effect */}
          <span className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-blue-400/10 blur-xl"></span>
        </motion.a>

      </div>
    </div>
  );
};

export default Contact;