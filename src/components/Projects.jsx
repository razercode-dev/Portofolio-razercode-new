import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoNodejs,
  
} from "react-icons/bi";
import { SiVite } from "react-icons/si";



const techIcons = {
  HTML: BiLogoHtml5,
  CSS: BiLogoCss3,
  JavaScript: BiLogoJavascript,
  React: BiLogoReact,
  Tailwind: BiLogoTailwindCss,
  "Tailwind CSS": BiLogoTailwindCss,
  Bootstrap: BiLogoBootstrap,
  "Node.js": BiLogoNodejs,
  Vite: SiVite, // fallback
};

const ProjectsData = [
  {
    id: "1",
    image: "/1.png",
    title: "Weather App",
    description: "A simple weather app built with API integration.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "https://weather-app-beige-six-87.vercel.app/",
    github: "https://github.com/razercode-dev/weather-app",
  },
  {
    id: "2",
    image: "/2.png",
    title: "AI Chat App",
    description: "A working chat app built with AI.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    demo: "https://ai-chat-app-rosy-kappa.vercel.app/",
    github: "https://github.com/razercode-dev/ai-chat-apps",
  },
  {
    id: "2-5",
    image: "/2-5.png",
    title: "AI Text to Speech",
    description: "A working text to speech converter built with AI.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    demo: "https://ai-text-to-speech-five.vercel.app/",
    github: "https://github.com/razercode-dev/ai-text-to-speech",
  },
  {
    id: "3",
    image: "/3.png",
    title: "Dynamic Calendar",
    description: "A dynamic calendar application built with Javascript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "https://dynamic-calendar-zeta.vercel.app",
    github: "https://github.com/razercode-dev/dynamic-calendar",
  },
  {
    id: "3-5",
    image: "/3-5.png",
    title: "AI Text Summarizer",
    description: "A working summarize text tools with AI.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    demo: "https://ai-text-summarizer-gamma-seven.vercel.app/",
    github: "https://github.com/razercode-dev/TextSummarizer",
  },
  {
    id: "4",
    image: "/4.png",
    title: "Text to Speech Converter",
    description: "A simple text to speech converter built with Javascript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "https://texttospeech-converter.vercel.app",
    github: "https://github.com/razercode-dev/texttospeech-converter",
  },
  {
    id: "5",
    image: "/5.png",
    title: "Age Calculator",
    description: "A simple age calculator built with Javascript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "https://age-calculator-one-lyart.vercel.app",
    github: "https://github.com/razercode-dev/age-calculator",
  },
  {
    id: "6",
    image: "/6.png",
    title: "Simple Calculator",
    description: "A simple calculator responsive and usable.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    demo: "https://simple-calculator-mocha-alpha.vercel.app/",
    github: "https://github.com/razercode-dev/Simple-Calculator",
  },
  {
    id: "7",
    image: "/7.png",
    title: "Tic Tac Toe",
    description: "An animated and interactive tic tac toe game.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    demo: "https://tictactoe-games-v2.vercel.app/",
    github: "https://github.com/razercode-dev/TicTacToeGames-V2",
  },
  {
    id: "8",
    image: "/8.png",
    title: "Todo List App",
    description: "A simple todo list app with CRUD features.",
    technologies: ["React", "Vite"],
    demo: "https://todo-list-app-nine-iota-76.vercel.app/",
    github: "https://github.com/razercode-dev/todo-list-app",
  },
];

/* 🎬 SCROLL ANIMATION */
const ScrollReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

ScrollReveal.propTypes = {
  children: PropTypes.node.isRequired,
};

/* 🧿 CARD */
const ProjectsCard = ({ project }) => (
  <ScrollReveal>
    <div className="flex flex-col gap-6 p-4 transition border group md:flex-row md:gap-10 md:p-6 rounded-2xl bg-white/5 border-white/10 backdrop-blur-md hover:border-blue-400/30">

      {/* IMAGE */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="w-full h-[200px] sm:h-[220px] md:w-[320px] md:h-[200px] overflow-hidden rounded-xl flex-shrink-0"
      >
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full"
        />
      </motion.div>

      <div className="flex flex-col justify-center flex-1 gap-4">

        <h2 className="text-xl font-semibold text-white sm:text-2xl">
          {project.title}
        </h2>

        <p className="text-sm leading-relaxed sm:text-base text-white/70">
          {project.description}
        </p>

        {/* 🧿 TECH ICONS */}
        <div className="flex flex-wrap items-center gap-3">
          {project.technologies.map((tech) => {
            const Icon = techIcons[tech];
            return Icon ? (
              <Icon
                key={tech}
                title={tech}
                className="text-[22px] text-white/70 transition hover:text-blue-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(100,150,255,0.7)]"
              />
            ) : null;
          })}
        </div>

        {/* BUTTON */}
        <div className="flex flex-wrap gap-3 mt-2">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex-1 px-4 py-2 text-sm text-center text-white transition rounded-lg sm:flex-none bg-white/10 hover:bg-blue-500/20"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 px-4 py-2 text-sm text-center text-white transition border rounded-lg sm:flex-none border-white/20 hover:bg-white/10"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </ScrollReveal>
);

ProjectsCard.propTypes = {
  project: PropTypes.object.isRequired,
};

/* 🚀 MAIN */
const Projects = () => (
  <div
    id="projects"
    className="flex flex-col items-center justify-center w-full min-h-screen gap-12 px-4 py-16 sm:gap-16 sm:px-6 md:px-14 md:py-24"
  >
    <ScrollReveal>
      <h1 className="text-4xl font-light text-white md:text-6xl">
        My Projects
      </h1>
    </ScrollReveal>

    <div className="flex flex-col gap-12 w-full max-w-[1000px]">
      {ProjectsData.map((project) => (
        <ProjectsCard key={project.id} project={project} />
      ))}
    </div>
  </div>
);

export default Projects;