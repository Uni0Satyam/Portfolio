import Card from "../home/Work/Card";
import { projects } from "../../constant";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function ProjectPage() {

    const projectContainer = useRef(null);
    const header = useRef(null);
    const project = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline();
            tl.from(header.current, {
                y: -100,
                duration: 0.6,
                opacity: 0,
                delay: 0.5,
                ease: "bounce.inOut",
            });
            tl.from(project.current, {
                y: 100,
                opacity: 0,
            });
        },
        { scope: projectContainer }
    )
    return (
        <section className="bg-[#202123] px-12 lg:px-24 xl:px-32 py-30" ref={projectContainer}>
            <h4 className="text-white text-4xl font-bold mb-8" ref={header}>Projects</h4>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3" ref={project}>
                {projects.map((project) => (
                    <Card
                        key={project.id}
                        title={project.title}
                        desc={project.description}
                        imgSrc="/assets/project_logo/image.png"
                        tags={project.tags}
                        githubUrl={project.github}
                        liveUrl={project.webapp}
                    ></Card>
                ))}
            </div>
        </section>
    );
}

export default ProjectPage;