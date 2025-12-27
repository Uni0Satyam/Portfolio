import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const skillsContainer = useRef(null);
    const border = useRef(null);

    useGSAP(
        () => {
            gsap.from(skillsContainer.current, {
                scrollTrigger: {
                    trigger: skillsContainer.current,
                    start: "-60% 95%",
                    end: "70% 10%",
                    toggleActions: "restart pause resume reverse",
                },
                y: 100,
                delay: 0.2,
                duration: 1.5,
                opacity: 0,
            });
            gsap.from(border.current, {
                scrollTrigger: {
                    trigger: border.current,
                    start: "top 95%",
                    toggleActions: "restart pause resume none",
                },
                x: -100,
                delay: 0.5,
                duration: 1.5,
                opacity: 0,
            });
        },
        { scope: skillsContainer }
    );
    return (
        <section className="px-8 md:px-12 lg:px-24 xl:px-32 pt-12" ref={skillsContainer}>
            <div className="grid grid-cols-1 text-center" id="skill">
                <h4 className="text-4xl text-[var(--white)] font-bold">Tech & Tools</h4>
                <div className="w-58 h-1 bg-[var(--primary)] mx-auto mt-2" ref={border}></div>
                <p className="text-[#999] my-3 font-semibold">These are the tools and technologies I regularly use to build responsive, performant, and production-ready web-applications.</p>
            </div>
        </section>
    );
}

export default Hero;