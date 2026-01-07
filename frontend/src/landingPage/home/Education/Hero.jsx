import { education } from "/src/constant.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const eduContainer = useRef(null);
    const border = useRef(null);

    useGSAP(
        () => {
            gsap.from(eduContainer.current, {
                scrollTrigger: {
                    trigger: eduContainer.current,
                    start: "10% 80%",
                    end: "50% 50%",
                    toggleActions: "restart pause resume reverse",
                },
                y: 100,
                opacity: 0,
            });
            gsap.from(border.current, {
                scrollTrigger: {
                    trigger: border.current,
                    start: "top 100%",
                    end: "bottom 40%",
                    toggleActions: "restart pause resume reverse",
                },
                x: -100,
                delay: 0.5,
                opacity: 0,
            });
        },
        { scope: eduContainer }
    );
    return (
        <section
            id="education"
            className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3" ref={eduContainer}>
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white">Education</h2>
                <div className="w-48 h-1 bg-[var(--primary)] mx-auto mt-2" ref={border}></div>
                <p className="text-[#999] mt-3 mb-12 font-semibold">
                    My education has been a journey of learning and development. Here are the details of my academic background
                </p>
            </div>

            <div className="relative">
                <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-[var(--white)] h-full"></div>

                {education.map((edu, index) => (
                    <div
                        key={edu.id}
                        className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                            }`}
                    >
                        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-[#999] border-4 border-[var(--primary)] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center md:z-0">
                            <img
                                src={edu.img}
                                alt={edu.school}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>

                        <div
                            className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-[var(--secondary-dark)] backdrop-blur-md shadow-[0_0_20px_1px_var(--primary)] ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
                                } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
                        >
                            <div className="flex items-center space-x-6">
                                <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                                    <img
                                        src={edu.img}
                                        alt={edu.school}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl sm:text-xl font-semibold text-white">
                                            {edu.degree}
                                        </h3>
                                        <h4 className="text-md sm:text-sm text-gray-300">
                                            {edu.school}
                                        </h4>
                                    </div>
                                    <h6 className="text-sm text-[#999] mt-2 border border-2 border-[var(--secondary)] rounded-full p-1.5 md:p-2 w-fit">{edu.date}</h6>
                                </div>
                            </div>

                            <p className="mt-4 text-[#999] font-bold">Grade: {edu.grade}</p>
                            <p className="mt-4 text-[#999]">{edu.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Hero;