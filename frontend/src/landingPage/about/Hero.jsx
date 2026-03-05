import SmallBadge from "../universal/SmallBadge"
import MapView from "./MapView";

function Hero() {

    return (
        <section className="bg-[#202123] px-12 md:px-12 lg:px-24 xl:px-32 py-30">
            <div className="text-[#999]">
                <div className="grid grid-cols-1">
                    <h4 className='text-[var(--white)] text-4xl font-bold'>About Me</h4>
                    <h6 className='mt-3'>Hey, I'm Satyam Kushwaha — a full stack web developer from Prayagraj, Uttar Pradesh. I love building clean, responsive, and scalable web applications using tools like HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS and Bootstrap. Along the way, I've worked with things like Motion, API integration, RestAPI, Git, and GitHub. After completing my 12th in 2024 with 71%, Then from 2024, I am pursuing my B.C.A. from K.P. Higher Education Institute (KPHEI). I've been focused on sharpening my frontend, backend, and along with that learning about Gen AI.</h6>                                                                  
                    <h6 className='mt-3'>Some of my key projects include Hikee (a small Airbnb-like web app), and more. I also enjoy participating in Hackathons. Right now, I’m actively looking for job, internship opportunities and building full-stack capabilities alongside AI-based tools. You can reach out to me at <a href="https://mail.google.com/mail/u/0/?fs=1&href=satyamkushwaha10c@gmail.com&su=Hiring!&tf=cm" target="_blank" className="border-b-2 border-[var(--primary)]">satyamkushwaha10c@gmail.com</a>, or check out my work on <a href="https://github.com/Uni0Satyam" target="_blank" className="border-b-2 border-[var(--primary)]">GitHub</a> and <a href="https://www.linkedin.com/in/satyam-kushwaha011/" target="_blank" className="border-b-2 border-[var(--primary)]">LinkedIn.</a></h6>
                    <div className="border-l-2 border-white/10 pl-4 mt-8 space-y-2" style={{ opacity: "1", transform: 'none' }}>
                        <p className="text-neutral-300">• Started B.C.A. in 2024 with a deep interest in technology and creativity.</p>
                        <p className="text-neutral-300">• Learned HTML, CSS, and JavaScript by building real-world web app components.</p>
                        <p className="text-neutral-300">• Explored React and TypeScript to develop scalable end-to-end applications.</p>
                    </div>
                    <div>
                        <h4 className='text-[var(--white)] text-2xl font-bold mt-8'>Education</h4>
                        <div className="mt-8 space-y-2" style={{ opacity: "1", transform: 'none' }} >
                            <ul>
                                <li><strong className="text-100 text-[var(--white)]">• B.C.A.</strong> – K.P. Uchha Siksha Sansthan (KPUSS), 2024-present | CGPA: --</li>
                                <li><strong className="text-100 text-[var(--white)]">• 12<sup>th</sup> </strong> – Genius Public Inter College (GPIC), 2023–2024 | Per: 71%</li>
                                <li><strong className="text-100 text-[var(--white)]">• 10<sup>th</sup></strong> – Pt. Ram Chandra Mishra Memorial Public School (PTRCMMS), 2021–2022 | Per: 78.4%</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-[var(--white)] text-2xl font-bold mt-8'>Skills</h4>
                        <div className="flex gap-3 flex-wrap">
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
                    <div>
                        <h4 className='text-[var(--white)] text-2xl font-bold mt-8'>Find me on <span className="text-[var(--primary)]">Map</span></h4>
                        <div className="mt-8">
                        <MapView></MapView>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;