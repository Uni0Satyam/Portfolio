import { motion } from "motion/react";
function Hero() {

    return (
        <section className="px-8 md:px-12 lg:px-24 xl:px-32 pt-12">
            <div className="grid grid-cols-1 text-center" id="skill">
                <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-4xl text-[var(--white)] font-bold">Tech & Tools</motion.h4>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0}}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="w-58 h-1 bg-[var(--primary)] mx-auto mt-2"></motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-[#999] my-3 font-semibold">These are the tools and technologies I regularly use to build responsive, performant, and production-ready web-applications.</motion.p>
            </div>
        </section>
    );
}

export default Hero;