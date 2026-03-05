import { motion } from "motion/react";
function Description() {

    return (
        <motion.section
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="px-8 md:px-12 lg:px-24 xl:px-32 py-32 grid grid-cols-1" id="about">
            <div className="md:p-8 lg:p-12 xl:p-24 p-4 bg-[var(--secondary-dark)] text-[#999] rounded-xl">
                <p className="my-4">Hello! I’m <span className="text-[var(--primary)]">Satyam Kushwaha</span>,a passionate <span className="border-b-2 border-[var(--primary)] font-bold text-[var(--white)]">Full Stack Web Developer</span> and BCA student with a strong focus on building scalable, responsive, and high-performing web interfaces. With a strong foundation in <span className="text-[var(--white)]">React, Node.js, Express, & MongoDB</span>, and component libraries like <span className="text-[var(--white)]">Bootstrap/MaterialUI</span>, I specialize in building scalable UIs that not only look clean — but work flawlessly across devices.
                </p>
                <p className="my-4">
                    I’ve built projects like Hikee, a travel experience platform where I designed <span className="text-[var(--white)]">RESTful APIs</span>, <span className="text-[var(--white)]">optimized database queries</span>, and integrated <span className="text-[var(--white)]">cloud-based image handling</span>. Hikee, helped me gain hands-on experience with <span className="text-[var(--white)]">backend architecture</span>, <span className="text-[var(--white)]">database optimization</span>, and <span className="text-[var(--white)]">cloud deployment</span>. I’m comfortable working across the stack—from crafting responsive UIs to designing efficient backend systems.
                </p>
                <p className="my-4">
                    I’m constantly learning, experimenting, and improving my skills, with a clear goal of becoming a strong software engineer who builds meaningful digital experiences. I value continuous learning and personal growth, and I’m always excited to take on new challenges.
                </p>
            </div>
        </motion.section>
    );
}

export default Description;