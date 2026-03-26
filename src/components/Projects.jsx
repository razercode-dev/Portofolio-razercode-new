import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ProjectsData = [
  {
    id: "1",
    image: "/1.png",
    title: "Weather App",
    description: "A simple weather app built in a API Integration and Javascript",
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
    description: "A dynamic calendar application built with Javascript...",
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
    description: "A simple text to speech converter built with Javascript...",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "https://texttospeech-converter.vercel.app",
    github: "https://github.com/razercode-dev/texttospeech-converter",
  },
  {
    id: "5",
    image: "/5.png",
    title: "Age Calculator",
    description: "A simple age calculator built with Javascript...",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "https://age-calculator-one-lyart.vercel.app",
    github: "https://github.com/razercode-dev/age-calculator",
  },
  {
    id: "6",
    image: "/6.png",
    title: "Simple Calculator",
    description: "A simple calculator responsive and useable...",
    technologies: ["React", "Tailwind CSS", "Vite"],
    demo: "https://simple-calculator-mocha-alpha.vercel.app/",
    github: "https://github.com/razercode-dev/Simple-Calculator",
  },
  {
    id: "7",
    image: "/7.png",
    title: "Tic Tac Toe",
    description: "A animated and interactive tic tac toe games.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    demo: "https://tictactoe-games-v2.vercel.app/",
    github: "https://github.com/razercode-dev/TicTacToeGames-V2",
  },
  {
    id: "8",
    image: "8.png",
    title: "Todo List App",
    description: "A simple todo list app with edit,update,add and delete task.",
    technologies: ["React", "Vite"],
    demo: "https://todo-list-app-nine-iota-76.vercel.app/",
    github: "https://github.com/razercode-dev/todo-list-app",
  },
];

const ScrollReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
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

const ProjectsCard = ({ project }) => (
  <ScrollReveal>
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-10">
      <motion.img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full rounded-2xl object-cover md:w-[300px] md:h-[200px]"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />

      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
        <p className="text-gray-400">{project.description}</p>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 text-sm font-medium text-white rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-2">
          <a
            href={project.demo}
            target="_blank"
            className="px-4 py-2 text-sm font-semibold text-white transition bg-gray-700 rounded-lg hover:bg-gray-800"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            className="px-4 py-2 text-sm font-semibold text-white transition border border-white rounded-lg hover:bg-black hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </ScrollReveal>
);

ProjectsCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const Projects = () => (
  <div
    id="projects"
    className="flex flex-col items-center justify-center w-full min-h-screen gap-16 p-4 md:px-14 md:py-24"
  >
    <ScrollReveal>
      <h1 className="text-4xl font-light text-white md:text-6xl">
        My Projects
      </h1>
    </ScrollReveal>

    <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
      {ProjectsData.map((project) => (
        <ProjectsCard key={project.id} project={project} />
      ))}
    </div>
  </div>
);

export default Projects;
