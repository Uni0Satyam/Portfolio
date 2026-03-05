import Badge from '../../universal/Badge'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Lottie from 'lottie-react';
import Contact from '../../../animation/contact.json'
import SecondaryButton from '../../universal/SecondaryButton';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useState } from 'react';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import { motion } from 'motion/react';

function Hero() {

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
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsDisable(true);
        setLoading(true);

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
        }
        setLoading(false);
    };

    return (
        <section>
            <div className="grid md:grid-cols-3 grid-cols-1 text-[var(--white)] px-8 md:px-12 lg:px-24 xl:px-32 py-32" id='contact'>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}>
                    <h3
                        className="text-4xl font-bold mb-1">Let's <span className="text-[var(--primary)]">Connect</span></h3>
                    <p className="text-[#999]">Feel free to reach out for collaborations or just a friendly chat</p>
                    <Badge title="+91 7704066737" icon={<CallIcon />}></Badge>
                    <Badge title="satyamkushwaha10c@gmail.com" icon={<EmailIcon />}></Badge>
                    <Lottie animationData={Contact} loop={true} className='p-2 md:p-4 lg:p-8 xl:p-10'></Lottie>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="w-1 h-full bg-[var(--primary)] mx-auto mt-2 hidden md:block"></motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className='p-8 rounded-lg shadow-[0_10px_10px_1px_var(--primary)]'>
                    <h3 className="text-4xl font-bold mb-1">Send a message</h3>
                    <form className='my-4 text-[#999]' onSubmit={handleSubmit}>
                        <label htmlFor="name">Your name</label>
                        <input type="text" className='w-full bg-transparent border-0 border-b-2 border-[#999] focus:border-[var(--primary)] focus:ring-0 outline-none py-2 mb-4' placeholder='Satyam Kushwaha' id='name' value={formData.name} name='name' onChange={handleOnChange} required onKeyDown={(e) => e.key === 'Enter' ? handleSubmit() : ""} />
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" className='w-full bg-transparent border-0 border-b-2 border-[#999] focus:border-[var(--primary)] focus:ring-0 outline-none py-2 mb-4' placeholder='satyam@example.com' value={formData.email} name='email' onChange={handleOnChange} required onKeyDown={(e) => e.key === 'Enter' ? handleSubmit() : ""} />
                        <label htmlFor="message">Message</label>
                        <textarea id="message" className='w-full bg-transparent border-0 border-b-2 border-[#999] focus:border-[var(--primary)] focus:ring-0 outline-none py-2 mb-4' rows={2} placeholder='Hello! Satyam' value={formData.message} name='message' onChange={handleOnChange} required onKeyDown={(e) => e.key === 'Enter' ? handleSubmit() : ""}></textarea>
                        <SecondaryButton title={loading ? <BeatLoader color="white" /> : "Send"} icon={loading ? "" : <TelegramIcon />} isDisabled={isDisable}></SecondaryButton>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
