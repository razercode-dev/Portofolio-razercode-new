
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
           className="text-center text-5xl md:text-7xl">
            <span className="bg-gradient-to-r from-cyan-500 to-gray-600 bg-clip-text text-transparent">Get in Touch</span>
          </motion.h1>


          <motion.p
           initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.4}}
           className="text-center text-lg font-semibold text-gray-500">
            I&apos;m currently open to new opportunities and collaborations. Whether you have a project in mind, want to discuss potential partnerships, or just want to say hello, feel free to reach out! You can contact me via email at <span className="text-cyan-500">razersyzen@gmail.com</span>.
          </motion.p>


          <motion.a
          initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.4}}
           href="mailto:razersyzen@gmail.com"className="text-nowrap rounded-lg border border-cyan-600 bg-black px-5 py-5 text-lg font-bold
          text-white shadow-lg shadow-cyan-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-600">Contact Me</motion.a>
        </div>
      </div>

  )
}

export default Contact
