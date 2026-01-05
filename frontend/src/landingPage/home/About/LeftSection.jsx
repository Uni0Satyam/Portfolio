import { Typewriter } from "react-simple-typewriter";
import Button from "../../universal/Button";
import SecondaryButton from "../../universal/SecondaryButton";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


function LeftSection() {
  const aboutLeft = useRef(null);

  useGSAP(() => {
    gsap.from(aboutLeft.current,{
      x: -100,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
    })
  })
  return (
    <div ref={aboutLeft}>
      <div className="grid grid-flow-col auto-cols-max gap-2 items-center">
        <span className="relative grid place-items-center h-2 w-2">
          <span className="absolute h-full w-full animate-ping rounded-full bg-[var(--primary)] opacity-75"></span>
          <span className="relative h-2 w-2 rounded-full bg-[var(--primary)]"></span>
        </span>
        <p className="text-gray-300 text-sm">Available for work</p>
      </div>

      <h1 className="mt-2 text-[var(--white)] text-4xl font-bold">
        Hi! I'm Satyam
      </h1>
      <h1 className="text-[var(--white)] text-4xl font-bold">
        Deploy Fast, Clean &
      </h1>
      <h1 className="text-[var(--white)] text-4xl font-bold">
        Modern web experiences.
      </h1>

      <h2 className="text-[var(--white)] text-xl mt-4">
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
      </h2>
      <div className="flex flex-wrap mt-6">
        <a href="https://drive.google.com/file/d/1QsFPN7z_MW732eAAJwb6TGs2J0314732/view?usp=sharing" target="_blank"><SecondaryButton title="Resume"></SecondaryButton></a>
        <a href="#project"><Button title="View Project" icon="&darr;"></Button></a>
      </div>
    </div>
  );
}

export default LeftSection;