
import { BiLogoCss3, BiLogoDjango, BiLogoHtml5, BiLogoReact, BiLogoTailwindCss, BiLogoJavascript } from 'react-icons/bi'
import { motion } from "framer-motion"

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <div id="technology" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
      
    
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

    
      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <BiLogoReact className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <BiLogoJavascript className="cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <BiLogoTailwindCss className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <BiLogoHtml5 className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <BiLogoCss3 className="cursor-pointer text-[80px] text-indigo-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div variants={variants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <BiLogoDjango className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
      </div>
    </div>
  )
}

export default Tech
