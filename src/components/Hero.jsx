import image from "/image.jpg";
import {motion}  from 'framer-motion'
function Hero() {
  return (
    <div
      id="home"
      className="px-16 flexx min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex   flex-col items-center justify-center gap-10 text-white">
        <motion.div
        
          initial={{y:-50,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:0.8 ,delay:0.2}}
        >
          <img
            src={image}
            alt=""
            className=" w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all   duration-300 hover:-translate-y-5 hover:shadow-2xl  hover:scale-105 hover:shadow-indigo-600 md:w-[350px] "
          />
        </motion.div>

          <motion.div 
          
              initial={{y:50,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:0.8 ,delay:0.2}}
          
          className="flex max-w-[600px]  flex-col items-center  justify-center gap-3 text-center">
         <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light transition-all duration-300 md:text-7xl">
            Himanshu
         </h1>
         <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xltransition-all duration-300 md:text-3xl">
        Web Developer
         </h3>
       <p className="md:text-base text-pretty text-sm text-gray-100">
  I'm a passionate MERN stack developer skilled in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I specialize in creating clean, responsive UIs and efficient backend services. Let's turn ideas into scalable, user-friendly products together!
</p>

          </motion.div>
      </div>
    </div>
  );
}

export default Hero;
