import image1 from "/1.png";
import image2 from "/2.png";
import image3 from "/3.png";
import image4 from "/4.png";
import image5 from "/5.png";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: image1,
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio to showcase my skills, projects, and resume. Built with React, Tailwind CSS, and deployed using Vercel.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    image: image2,
    title: "ToDo App",
    description:
      "A simple and clean task management app that allows users to add, mark complete, and delete tasks. Local storage used for persistence.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
 {
  image: image3,
  title: "Real-time Chat Application",
  description:
    "A full-stack chat application supporting real-time messaging with WebSockets, user authentication, and online status indicators using MERN stack.",
  technologies: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
},

  // {
  //   image: image4,
  //   title: "Expense Tracker",
  //   description:
  //     "A budget tracking application to add income/expenses, visualize them in pie charts, and save data locally using Chart.js.",
  //   technologies: ["React", "Chart.js", "CSS", "localStorage"],
  // },
  // {
  //   image: image5,
  //   title: "YouTube Clone",
  //   description:
  //     "A mini YouTube-like video player app fetching video data via YouTube API with search, thumbnails, and video playback.",
  //   technologies: ["React", "Tailwind CSS", "YouTube API"],
  // },
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
      </div>
    </div>
</ScrollReveal>
  );
};

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
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
