import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';

function Card({ title, desc, imgSrc, tags = [], githubUrl, liveUrl }) {
    return (
        <div className="p-5 bg-[var(--secondary-dark)] rounded-xl text-[var(--white)]">
            <img src={imgSrc} alt={title} className="rounded-xl bg-[var(--dark)]" />
            <h1 className="py-4 text-2xl text-[var(--primary)]">{title}</h1>
            <p className="text-[#999] leading-5 md:text-pretty text-wrap">{desc}</p>
            <div className="flex flex-wrap gap-2 mt-8">
                {tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 ring-1 ring-[var(--primary)]
            rounded-full text-xs bg-[var(--secondary)] font-semibold">{tag}
                    </span>
                ))}
            </div>
            <div className='flex mt-5 justify-center gap-8 '>
                <a href={githubUrl} target='_blank'>
                    <div className='p-2 rounded-full hover:bg-[var(--secondary)] border-1 border-[var(--white)] cursor-pointer'>
                        <GitHubIcon></GitHubIcon>
                    </div>
                </a>
                <a href={liveUrl} target='_blank'>
                    <div className='p-2 rounded-full border-1 border-[var(--white)] hover:bg-[var(--secondary)] cursor-pointer'>
                        <CodeIcon></CodeIcon>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Card;
