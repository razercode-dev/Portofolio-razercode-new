
import { motion } from "framer-motion"


const Contact = () => {
  return (
      <div
       id="contact" className="flex min-h-[70vh] min-w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
          <motion.h1
          initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.2}}
           className="text-5xl text-center md:text-7xl">
            <span className="text-transparent bg-white bg-clip-text">Get in Touch</span>
          </motion.h1>


          <motion.p
           initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.4}}
           className="text-lg font-semibold text-center text-white">
            I&apos;m currently open to new opportunities and collaborations. Whether you have a project in mind, want to discuss potential partnerships, or just want to say hello, feel free to reach out! You can contact me via email at <span className="text-cyan-500">razersyzen@gmail.com</span>.
          </motion.p>


          <motion.a
          initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.4}}
           href="mailto:razersyzen@gmail.com"className="px-5 py-5 text-lg font-bold text-white transition-all duration-300 border rounded-lg shadow-lg bg-black/30 text-nowrap border-cyan-600 shadow-cyan-700 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-600">Contact Me</motion.a>
        </div>
      </div>

  )
}

export default Contact
