import Card from "./Card";
import Button from "../../universal/Button";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Hero() {

    const projectContainer = useRef(null);
    const border = useRef(null);
    const leftCard = useRef(null);
    const centerCard = useRef(null);
    const rightCard = useRef(null);
    const button = useRef(null);

    useGSAP(
        () => {
            gsap.from(projectContainer.current, {
                scrollTrigger: {
                    trigger: projectContainer.current,
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
                x: 100,
                delay: 0.5,
                duration: 1.5,
                opacity: 0,
            });
            gsap.from(leftCard.current, {
                scrollTrigger: {
                    trigger: leftCard.current,
                    start: "-40% 95%",
                    toggleActions: "restart pause resume reverse",
                },
                x: -120,
                duration: 0.6,
                opacity: 0,
                delay: 0.5,
            });
            gsap.from(centerCard.current, {
                scrollTrigger: {
                    trigger: centerCard.current,
                    start: "-40% 95%",
                    toggleActions: "restart pause resume reverse",
                },
                y: 100,
                duration: 0.6,
                opacity: 0,
                delay: 0.5,
            });
            gsap.from(rightCard.current, {
                scrollTrigger: {
                    trigger: rightCard.current,
                    start: "-40% 95%",
                    toggleActions: "restart pause resume reverse",
                },
                x: 120,
                duration: 0.6,
                opacity: 0,
                delay: 0.5,
            });
            gsap.from(button.current, {
                scrollTrigger: {
                    trigger: button.current,
                    start: "-10% 95%",
                    toggleActions: "restart pause resume reverse",
                },
                y: 100,
                duration: 0.6,
                opacity: 0,
            });
        },
        { scope: projectContainer }
    );

    return (
        <section className="px-8 md:px-12 lg:px-24 xl:px-32 pt-24 pb-10" id="project" ref={projectContainer}>
            <div className="grid grid-cols-1 text-center">
                <h4 className="text-4xl text-[var(--white)] font-bold" >Projects</h4>
                <div className="w-42 h-1 bg-[var(--primary)] mx-auto mt-2" ref={border}></div>
                <p className="text-[#999] mt-3 mb-12 font-semibold">A showcase of the projects I have worked on, highlighting my skills and experience in various technologies.</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                <div ref={leftCard}>
                    <Card
                        title="Hikee"
                        desc="A small Airbnb-like web app (Express + EJS + MongoDB). This contains the server, views (EJS), static assets and example data used to build and list short-term rental listings and reviews"
                        imgSrc="/assets/project_logo/image.png"
                        tags={["Ejs", "Express", "Javascript", "CSS", "Bootstrap", "Node.js", "MongoDB", "Joi", "Passport", "Cloudinary", "leaflet", "Geoapify"]}
                        githubUrl="https://github.com/Uni0Satyam/Hikee"
                        liveUrl="https://major-project-gx8l.onrender.com/listings"
                    ></Card>
                </div>
                <div ref={centerCard}>
                    <Card title="Sample" desc="Sample text" imgSrc="/assets/project_logo/image.png"></Card>
                </div>
                <div ref={rightCard}>
                    <Card title="Sample" desc="Sample text" imgSrc="/assets/project_logo/image.png"></Card>
                </div>
            </div>
            <div className="text-center" ref={button}>
                <a href="/project"><Button title="See more" icon="&rarr;"></Button></a>
            </div>
        </section>
    );
}

export default Hero;