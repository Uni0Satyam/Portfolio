import { SkillsInfo } from "../../../constant";
import Tilt from "react-parallax-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {

    const skillBox = useRef(null);
    const skill = useRef(null);

    useGSAP(
        () => {
            gsap.from(skillBox.current, {
                scrollTrigger: {
                    trigger: skill.current,
                    start: "-10% 70%",
                    end: "80% 60%",
                    toggleActions: "restart pause resume reverse",
                },
                y: 100,
                delay: 0.5,
                opacity: 0,
            });
        },
        { scope: skillBox }
    );
    return (
        <section className="pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom" ref={skillBox}>
            <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between" ref={skill}>
                {SkillsInfo.map((category) => (
                    <div key={category.title}
                        className="bg-[var(--secondary-dark)] backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_var(--primary)]">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-[#999] text-center mb-4">
                            {category.title}
                        </h3>

                        <Tilt
                            key={category.title}
                            tiltMaxAngleX={20}
                            tiltMaxAngleY={20}
                            perspective={1000}
                            scale={1.05}
                            transitionSpeed={1000}
                            gyroscope={true}
                        >
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center justify-center space-x-2 bg-transparent border-2 border-[var(--secondary)] rounded-3xl py-2 px-2 sm:py-2 sm:px-2 md:p-3 text-center"
                                    >
                                        <img
                                            src={skill.logo}
                                            alt={`${skill.name} logo`}
                                            className="w-6 h-6 sm:w-8 sm:h-8"
                                        />
                                        <span className="text-xs sm:text-sm text-gray-300">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Tilt>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skill;
