import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiPostman,
  SiCplusplus,
  SiMysql,
  SiGit,
} from "react-icons/si";
import { motion as Motion } from "framer-motion";

function Skills() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div
      id="skills"
      className="flex min-h-[70vh] w-full flex-col items-center gap-16 md:gap-32"
    >
      <Motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light  text-white"
      >
        Technical Skills
      </Motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <Motion.div>
          <SiHtml5 className="cursor-pointer text-[80px] text-orange-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </Motion.div>
        <Motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiCss3 className="cursor-pointer text-[80px] text-blue-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </Motion.div>
        <Motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiJavascript className="cursor-pointer text-[80px] text-yellow-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </Motion.div>
        <Motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiReact className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </Motion.div>
        <Motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiTailwindcss className="cursor-pointer text-[80px] text-cyan-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </Motion.div>
        <Motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiNodedotjs className="cursor-pointer text-[80px] text-green-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </Motion.div>
        <Motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiExpress className="cursor-pointer text-[80px] text-gray-300 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </Motion.div>
        <Motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiMongodb className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </Motion.div>
        <Motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiMysql className="cursor-pointer text-[80px] text-sky-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </Motion.div>
        <Motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiGithub className="cursor-pointer text-[80px] text-white transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </Motion.div>
        <Motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiPostman className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </Motion.div>
        <Motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiGit className="cursor-pointer text-[80px] text-orange-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </Motion.div>
        <Motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiCplusplus className="cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </Motion.div>
      </div>
      <div className="grid w-full max-w-[1000px] gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white/10 p-6 text-white shadow-lg shadow-black/20">
          <h2 className="mb-3 text-2xl font-semibold">Programming Languages</h2>
          <p>C++, JavaScript, HTML, CSS</p>
        </div>
        <div className="rounded-3xl bg-white/10 p-6 text-white shadow-lg shadow-black/20">
          <h2 className="mb-3 text-2xl font-semibold">Libraries / Frameworks</h2>
          <p>React.js, Node.js, Express.js, Tailwind CSS</p>
        </div>
        <div className="rounded-3xl bg-white/10 p-6 text-white shadow-lg shadow-black/20">
          <h2 className="mb-3 text-2xl font-semibold">Databases</h2>
          <p>MongoDB, MySQL</p>
        </div>
        <div className="rounded-3xl bg-white/10 p-6 text-white shadow-lg shadow-black/20">
          <h2 className="mb-3 text-2xl font-semibold">Developer Tools</h2>
          <p>Git, GitHub, VS Code, Postman, Vercel, Render</p>
        </div>
        <div className="rounded-3xl bg-white/10 p-6 text-white shadow-lg shadow-black/20 md:col-span-2">
          <h2 className="mb-3 text-2xl font-semibold">Core Concepts</h2>
          <p>OOP, Computer Networks, DBMS</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
