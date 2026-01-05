import { useGSAP } from "@gsap/react";
import SmallBadge from "../universal/SmallBadge"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function Hero() {

    const aboutContainer = useRef(null);
    const header1 = useRef(null);
    const header2 = useRef(null);
    const header3 = useRef(null);
    const para1 = useRef(null);
    const para2 = useRef(null);
    const para3 = useRef(null);
    const para4 = useRef(null);
    const skillParent = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline();
            tl.from(header1.current, {
                y: -100,
                duration: 0.6,
                opacity: 0,
                delay: 0.5,
                ease: "bounce.inOut",
            });
            tl.from(para1.current, {
                y: 100,
                opacity: 0,
            });
            tl.from(para2.current, {
                y: 100,
                opacity: 0,
                stagger:0.2,
            });
            tl.from(para3.current, {
                y: 100,
                opacity: 0,
                stagger:0.2,
            });
            const t2 = gsap.timeline();
            t2.from(header2.current, {
                y: -100,
                duration: 0.6,
                opacity: 0,
                delay: 0.5,
                ease: "bounce.inOut",
            });
            t2.from(para4.current, {
                y: 100,
                opacity: 0,
                stagger:0.2,
            });
            const t3 = gsap.timeline();
            t3.from(header3.current, {
                y: -100,
                duration: 0.6,
                opacity: 0,
                delay: 0.5,
                ease: "bounce.inOut",
            });
            t3.from(skillParent.current, {
                y: 100,
                opacity: 0,
            });
        },
        { scope: aboutContainer }
    )

    return (
        <section className="bg-[#202123] px-12 md:px-12 lg:px-24 xl:px-32 py-30" ref={aboutContainer}>
            <div className="text-[#999]">
                <div className="grid grid-cols-1">
                    <h4 className='text-[var(--white)] text-4xl font-bold' ref={header1}>About Me</h4>
                    <h6 className='mt-3' ref={para1}>Hey, I'm Satyam Kushwaha — a full stack web developer from Prayagraj, Uttar Pradesh. I love building clean, responsive, and scalable web applications using tools like HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS and Bootstrap. Along the way, I've worked with things like Gsap, API integration, RestAPI, Git, and GitHub. After completing my 12th in 2024 with 71%, Then from 2024, I am pursuing my B.C.A. from K.P. Higher Education Institute (KPHEI). I've been focused on sharpening my frontend, backend, and along with that learning about Gen AI.</h6>                                                                  
                    <h6 className='mt-3' ref={para2}>Some of my key projects include Hikee (a small Airbnb-like web app), and more. I also enjoy participating in Hackathons. Right now, I’m actively looking for job, internship opportunities and building full-stack capabilities alongside AI-based tools. You can reach out to me at <a href="https://mail.google.com/mail/u/0/?fs=1&href=satyamkushwaha10c@gmail.com&su=Hiring!&tf=cm" target="_blank" className="border-b-2 border-[var(--primary)]">satyamkushwaha10c@gmail.com</a>, or check out my work on <a href="https://github.com/Uni0Satyam" target="_blank" className="border-b-2 border-[var(--primary)]">GitHub</a> and <a href="https://www.linkedin.com/in/satyam-kushwaha011/" target="_blank" className="border-b-2 border-[var(--primary)]">LinkedIn.</a></h6>
                    <div className="border-l-2 border-white/10 pl-4 mt-8 space-y-2" style={{ opacity: "1", transform: 'none' }} ref={para3}>
                        <p className="text-neutral-300">• Started B.C.A. in 2024 with a deep interest in technology and creativity.</p>
                        <p className="text-neutral-300">• Learned HTML, CSS, and JavaScript by building real-world web app components.</p>
                        <p className="text-neutral-300">• Explored React and TypeScript to develop scalable end-to-end applications.</p>
                    </div>
                    <div>
                        <h4 className='text-[var(--white)] text-2xl font-bold mt-8' ref={header2}>Education</h4>
                        <div className="mt-8 space-y-2" style={{ opacity: "1", transform: 'none' }} >
                            <ul ref={para4}>
                                <li><strong className="text-100 text-[var(--white)]">• B.C.A.</strong> – K.P. Uchha Siksha Sansthan (KPUSS), 2024-present | CGPA: --</li>
                                <li><strong className="text-100 text-[var(--white)]">• 12<sup>th</sup> </strong> – Genius Public Inter College (GPIC), 2023–2024 | Per: 71%</li>
                                <li><strong className="text-100 text-[var(--white)]">• 10<sup>th</sup></strong> – Pt. Ram Chandra Mishra Memorial Public School (PTRCMMS), 2021–2022 | Per: 78.4%</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-[var(--white)] text-2xl font-bold mt-8' ref={header3}>Skills</h4>
                        <div className="flex gap-3 flex-wrap" ref={skillParent}>
                            <SmallBadge title="Mongo DB"></SmallBadge>
                            <SmallBadge title="Express"></SmallBadge>
                            <SmallBadge title="JavaScript"></SmallBadge>
                            <SmallBadge title="React JS"></SmallBadge>
                            <SmallBadge title="Redux"></SmallBadge>
                            <SmallBadge title="Tailwind CSS"></SmallBadge>
                            <SmallBadge title="Material UI"></SmallBadge>
                            <SmallBadge title="Bootstrap"></SmallBadge>
                            <SmallBadge title="Node JS"></SmallBadge>
                            <SmallBadge title="JavaScript"></SmallBadge>
                            <SmallBadge title="See More..." link="/#skill"></SmallBadge>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;