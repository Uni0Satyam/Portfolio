import { Typewriter } from "react-simple-typewriter";
import Button from "../../universal/Button";
import SecondaryButton from "../../universal/SecondaryButton";
import { motion } from 'motion/react'


function LeftSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} className="grid grid-flow-col auto-cols-max gap-2 items-center">
        <span className="relative grid place-items-center h-2 w-2">
          <span className="absolute h-full w-full animate-ping rounded-full bg-[var(--primary)] opacity-75"></span>
          <span className="relative h-2 w-2 rounded-full bg-[var(--primary)]"></span>
        </span>
        <p
          className="text-gray-300 text-sm">Available for work</p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-2 text-[var(--white)] text-4xl font-bold">
        Hi! I'm Satyam
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }} className="text-[var(--white)] text-4xl font-bold">
        Deploy Fast, Clean &
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }} className="text-[var(--white)] text-4xl font-bold">
        Modern web experiences.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-[var(--white)] text-xl mt-4">
        I am{" "}
        <span className="text-[var(--primary)] font-bold">
          <Typewriter
            words={[
              "Fullstack Developer",
              "Web Developer",
              "Backend Developer",
              "Frontend Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={70}
            delaySpeed={2000}
          />
        </span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2}}
        className="flex flex-wrap mt-6">
        <a
          href="https://docs.google.com/document/d/1w8LopUDqCTKpiOMQVp0eijdwMEB6YMwPzljzeE0viEs/edit?usp=sharing" target="_blank"><SecondaryButton title="Resume"></SecondaryButton></a>
        <a href="#project"><Button title="View Project" icon="&darr;"></Button></a>
      </motion.div>
    </motion.div>
  );
}

export default LeftSection;