import Badge from '../../universal/Badge'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Lottie from 'lottie-react';
import Contact from '../../../animation/contact.json'
import SecondaryButton from '../../universal/SecondaryButton';
import TelegramIcon from '@mui/icons-material/Telegram';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import axios from 'axios';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const contactContainer = useRef(null);
    const border = useRef(null);
    const leftSection = useRef(null);
    const rightSection = useRef(null);

    useGSAP(
        () => {
            gsap.from(leftSection.current, {
                scrollTrigger: {
                    trigger: leftSection.current,
                    start: "top 70%",
                    end: "bottom 80%",
                    toggleActions: "restart pause resume reverse",
                },
                x: -90,
                duration: 1.5,
                opacity: 0,
            });
            gsap.from(rightSection.current, {
                scrollTrigger: {
                    trigger: rightSection.current,
                    start: "top 70%",
                    end: "bottom 80%",
                    toggleActions: "restart pause resume reverse",
                },
                x: 90,
                duration: 1.5,
                opacity: 0,
            });
            gsap.from(border.current, {
                scrollTrigger: {
                    trigger: rightSection.current,
                    start: "top 70%",
                    end: "bottom 80%",
                    toggleActions: "restart pause resume reverse",
                },
                y: 100,
                duration: 1,
                opacity: 0,
            });
        },
        { scope: contactContainer }
    );


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleOnChange = (e) => {

        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    };

    const [isDisable, setIsDisable] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsDisable(true);
        setIsSent(true);

        try {
            const res = await axios.post("https://portfolio-u0tl.onrender.com/api/contact", formData);

            alert(res.data.message);

            setFormData({
                name: "",
                email: "",
                message: "",
            });
            setIsDisable(false);
        } catch (error) {
            console.error(error);
            setIsDisable(false);
            alert("Something went wrong");
        } finally{
            setIsSent(true);
        }
    };

    return (
        <section ref={contactContainer}>
            <div className="grid md:grid-cols-3 grid-cols-1 text-[var(--white)] px-8 md:px-12 lg:px-24 xl:px-32 py-32" id='contact'>
                <div ref={leftSection}>
                    <h3 className="text-4xl font-bold mb-1">Let's <span className="text-[var(--primary)]">Connect</span></h3>
                    <p className="text-[#999]">Feel free to reach out for collaborations or just a friendly chat</p>
                    <Badge title="+91 7704066737" icon={<CallIcon />}></Badge>
                    <Badge title="satyamkushwaha10c@gmail.com" icon={<EmailIcon />}></Badge>
                    <Lottie animationData={Contact} loop={true} className='p-2 md:p-4 lg:p-8 xl:p-10'></Lottie>
                </div>
                <div ref={border} className="w-1 h-full bg-[var(--primary)] mx-auto mt-2 hidden md:block"></div>
                <div className='p-8 rounded-lg shadow-[0_10px_10px_1px_var(--primary)]' ref={rightSection}>
                    <h3 className="text-4xl font-bold mb-1">Send a message</h3>
                    <form className='my-4 text-[#999]' onSubmit={handleSubmit}>
                        <label htmlFor="name">Your name</label>
                        <input type="text" className='w-full bg-transparent border-0 border-b-2 border-[#999] focus:border-[var(--primary)] focus:ring-0 outline-none py-2 mb-4' placeholder='Satyam Kushwaha' id='name' value={formData.name} name='name' onChange={handleOnChange} required />
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" className='w-full bg-transparent border-0 border-b-2 border-[#999] focus:border-[var(--primary)] focus:ring-0 outline-none py-2 mb-4' placeholder='satyam@example.com' value={formData.email} name='email' onChange={handleOnChange} required />
                        <label htmlFor="message">Message</label>
                        <textarea id="message" className='w-full bg-transparent border-0 border-b-2 border-[#999] focus:border-[var(--primary)] focus:ring-0 outline-none py-2 mb-4' rows={2} placeholder='Hello! Satyam' value={formData.message} name='message' onChange={handleOnChange} required ></textarea>
                        <SecondaryButton title={isSent ? "Sent" : isDisable ? "Sending..." : "Send"} icon={isSent ? <TaskAltIcon/> : <TelegramIcon />} isDisabled={isDisable}></SecondaryButton>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Hero;
