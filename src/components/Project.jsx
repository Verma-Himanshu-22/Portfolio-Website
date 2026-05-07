import image1 from "/1.png";
import image2 from "/2.png";
import image3 from "/3.png";
import { motion as Motion } from "framer-motion";

const projectsData = [
  {
    image: image1,
    title: "Codexis – Online Coding Platform",
    description:
      "A full-stack coding platform enabling users to solve programming problems with real-time code execution using Judge0 API. Features include multi-language Monaco Editor support, AI-powered coding assistance, RESTful APIs for submissions and progress tracking, and optimized concurrent request handling.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Judge0 API",
      "Gemini API",
      "Monaco Editor",
    ],
    githubLink: "https://github.com/Verma-Himanshu-22/Codexis",
  },

  {
    image: image3,
    title: "Vimarsh AI",
    description:
      "An AI-powered web application for analyzing PDFs, images, and web content with features like summarization, question-answering, context-aware conversations, and real-time response streaming using Gemini AI.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI"],
    githubLink: "https://github.com/Verma-Himanshu-22/Vimarsh-AI",
  },
  {
    image: image2,
    title: "StudyNotion EdTech Platform",
    description:
      "A fully functional EdTech platform built with the MERN stack that enables students to learn and purchase courses, and instructors to create and manage educational content with integrated payments and media storage.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Redux",
      "Tailwind CSS",
      "Razorpay",
      "Cloudinary",
    ],
    githubLink: "https://github.com/Verma-Himanshu-22/Study-Notion-WebApp",
  },


];

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt=""
          className="cursor-pointer w-full rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5 ">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-100"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const ScrollReveal = ({ children }) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </Motion.div>
  );
};

function Project() {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white ">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Project;
