import Tilt from "react-parallax-tilt";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"

function RightSection() {
  const aboutRight = useRef(null);

  useGSAP(() => {
    gsap.from(aboutRight.current, {
      x: 100,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
    })
  })

  return (
    <div className="grid place-items-center" ref={aboutRight}>
      <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20}>
        <div className="w-[15rem] h-[15rem] lg:w-[25rem] lg:h-[25rem] bg-[var(--secondary-dark)] rounded-full 
                        grid place-items-center shadow-lg shadow-[#84CC16]
                        overflow-hidden">
          <img src="/satyam.jpg" alt="vite" className="w-full h-full object-cover" />
        </div>
      </Tilt>
    </div>
  );
}

export default RightSection;