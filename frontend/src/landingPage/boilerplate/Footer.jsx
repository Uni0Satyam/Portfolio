import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';


const Footer = () => {
    return (
        <section className='p-4 bg-[#202123] border-t border-[var(--secondary)]'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
                <div className="flex gap-4 text-[var(--white)]">
                    <a href="https://github.com/Uni0Satyam" className='p-2 border rounded-lg hover:text-[var(--primary)]' target='_blank'><GitHubIcon></GitHubIcon></a>
                    <a href="https://in.linkedin.com/in/satyam-kushwaha011" className='p-2 border rounded-lg hover:text-[var(--primary)]' target='_blank'><LinkedInIcon></LinkedInIcon></a>
                    <a href="https://leetcode.com/u/Stym_Kushwaha/" className='p-2 border rounded-lg hover:text-[var(--primary)]' target='_blank'><CodeIcon></CodeIcon></a>
                </div>
                <p className='text-sm text-neutral-400 text-center'>Made with <span className='text-red-600 text-lg'>&hearts;</span> by <span className="font-semibold text-[var(--primary)]">Satyam Kushwaha</span></p>
            </div>
        </section>
    )
}

export default Footer;