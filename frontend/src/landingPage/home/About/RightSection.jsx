import Tilt from "react-parallax-tilt";
import { motion } from "motion/react";

function RightSection() {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9}}
      animate={{ opacity: 1, scale: 1}}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="grid place-items-center">
      <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20}>
        <div className="w-[15rem] h-[15rem] lg:w-[25rem] lg:h-[25rem] bg-[var(--secondary-dark)] rounded-full 
                        grid place-items-center shadow-lg shadow-[#84CC16]
                        overflow-hidden">
          <img src="/satyam.jpg" alt="vite" className="w-full h-full object-cover" />
        </div>
      </Tilt>
    </motion.div>
  );
}

export default RightSection;