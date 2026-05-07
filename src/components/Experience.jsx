import { motion as Motion } from "framer-motion";

function Experience() {
  return (
    <div
      id="experience"
      className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-10 px-4 py-16 text-white md:px-8"
    >
      <Motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Experience
      </Motion.h1>
      <Motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full max-w-[1000px] rounded-[40px] border border-white/10 bg-white/10 p-8 shadow-xl shadow-black/30"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-semibold text-white">Serene MINDS</div>
            <a
              href="https://www.sereneminds.life/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-300 underline"
            >
              sereneminds.life
            </a>
            <p className="text-sm text-gray-300">
              Software Development Intern (Backend) | Oct 2025 – Jan 2026
            </p>
          </div>
          <ul className="list-disc space-y-3 pl-5 text-gray-200">
            <li>
              Handled 100+ API requests per day, ensuring reliable backend performance
              and low latency.
            </li>
            <li>
              Improved API response time by 50-60% through query optimization and
              eliminating redundant database calls.
            </li>
            <li>
              Designed and maintained RESTful APIs using Node.js, Express.js, and
              MongoDB.
            </li>
            <li>
              Implemented secure authentication and authorization using JWT for
              protected user access.
            </li>
            <li>
              Collaborated with the frontend team to integrate APIs and deliver a seamless
              user experience.
            </li>
            <li>
              Followed modular architecture and best practices to improve scalability and
              maintainability.
            </li>
          </ul>
        </div>
      </Motion.div>
    </div>
  );
}

export default Experience;
