import Card from "../home/Work/Card";
import { projects } from "../../constant";
import { motion } from "motion/react";

function ProjectPage() {

    return (
        <section className="bg-[#202123] px-12 lg:px-24 xl:px-32 py-30">
            <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-white text-4xl font-bold mb-8">Projects</motion.h4>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
                {projects.map((project) => (
                    <Card
                        key={project.id}
                        title={project.title}
                        desc={project.description}
                        imgSrc={project.image}
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