import Card from "./Card";
import Button from "../../universal/Button";
import { motion } from "motion/react";

function Hero() {

    const containerVariant = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
                ,
            },
        },
    };

    return (
        <section className="px-8 md:px-12 lg:px-24 xl:px-32 pb-10" id="project">
            <div className="grid grid-cols-1 text-center">
                <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-4xl text-[var(--white)] font-bold" >Projects</motion.h4>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="w-42 h-1 bg-[var(--primary)] mx-auto mt-2"></motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-[#999] mt-3 mb-12 font-semibold">A showcase of the projects I have worked on, highlighting my skills and experience in various technologies.</motion.p>
            </div>
            <motion.div
                variants={containerVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                <motion.div
                    variants={itemVariant}>
                    <Card
                        title="Hikee"
                        desc="A small Airbnb-like web app (Express + EJS + MongoDB). This contains the server, views (EJS), static assets and example data used to build and list short-term rental listings and reviews"
                        imgSrc="/assets/project_logo/image1.png"
                        tags={["Ejs", "Express", "Javascript", "CSS", "Bootstrap", "Node.js", "MongoDB", "Joi", "Passport", "Cloudinary", "leaflet", "Geoapify"]}
                        githubUrl="https://github.com/Uni0Satyam/Hikee"
                        liveUrl="https://major-project-gx8l.onrender.com/listings"
                    ></Card>
                </motion.div>
                <motion.div
                    variants={itemVariant}>
                    <Card
                        title="QueryFlow-AI"
                        desc="QueryFlow AI is a full‑stack AI-powered chat and query management application inspired by ChatGPT. It allows users to authenticate securely, create conversation threads, send queries, and receive AI-generated responses in real time."
                        imgSrc="/assets/project_logo/image2.png"
                        tags={["Express", "Javascript", "CSS", "Node.js", "MongoDB", "leaflet", "Open router", "React Spinner"]}
                        githubUrl="https://github.com/Uni0Satyam/QueryFlow-AI"
                        liveUrl="https://queryflow-ai-64up.onrender.com"
                    ></Card>
                </motion.div>
                <motion.div
                    variants={itemVariant}>
                    <Card title="Sample" desc="Sample text" imgSrc="/assets/project_logo/image1.png"></Card>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }} className="text-center">
                <a href="/project"><Button title="See more" icon="&rarr;"></Button></a>
            </motion.div>
        </section>
    );
}

export default Hero;