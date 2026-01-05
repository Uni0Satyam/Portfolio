import { useEffect, useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Icon from "./Icon";
import { Link , useLocation} from "react-router-dom"
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [navIsOpen, setNavIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.replace("/","");
        setActiveSection(path || "home");
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navBar = useRef(null);

    useGSAP(() => {
        gsap.from(navBar.current, {
            y: -100,
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
        })
    })

    return (
        <nav className={`flex justify-between items-center px-12 fixed top-0 left-0 right-0 z-50 py-5 
         ${scrolled ? "bg-white/20 backdrop-blur-lg transition-all duration-300 ease-in-out" : ""}`} ref={navBar}>
            <Icon></Icon>

            <div className="hidden md:flex">
                <div className="ring-2 ring-[#84CC16] bg-[var(--secondary-dark)] h-12 items-center p-1 rounded flex">

                    <div className={`mx-1 p-1.5 rounded flex hover:bg-[#5F684A] gap-1 cursor-pointer
                        ${activeSection === "home" ? "bg-gray-200 hover:bg-white" : "text-gray-300"}`}
                        > <Link to="/">
                            <HomeIcon className="transition-transform duration-600 ease-in-out hover:rotate-[8deg] me-1" />
                            {activeSection === "home" && <span>Home</span>}</Link>
                    </div>

                    <div className={`mx-1 p-1.5 rounded flex hover:bg-[#5F684A] gap-1 cursor-pointer
                        ${activeSection === "about" ? "bg-gray-200 hover:bg-white" : "text-gray-300"}`}
                        > <Link to="/about">
                            <PersonIcon className="transition-transform duration-600 ease-in-out hover:rotate-[-8deg] me-1" />
                            {activeSection === "about" && <span>About</span>}</Link>
                    </div>

                    <div className={`mx-1 p-1.5 rounded flex hover:bg-[#5F684A] gap-1 cursor-pointer 
                        ${activeSection === "project" ? "bg-gray-200 hover:bg-white" : "text-gray-300"}`}
                        > <Link to="/project">
                            <FolderIcon className="transition-transform duration-600 ease-in-out hover:rotate-[8deg] me-1" />
                            {activeSection === "project" && <span>Project</span>}</Link>
                    </div>

                    <div className={`mx-1 p-1.5 rounded flex hover:bg-[#5F684A] gap-1 cursor-pointer 
                        ${activeSection === "contact" ? "bg-gray-200 hover:bg-white" : "text-gray-300"}`}
                        > <Link to="/contact">
                            <MailIcon className="transition-transform duration-600 ease-in-out hover:rotate-[-8deg] me-1" />
                            {activeSection === "contact" && <span>Contact</span>}</Link>
                    </div>

                </div>
            </div>

            <div className="flex items-center gap-2">
                <Link to="https://mail.google.com/mail/?view=cm&fs=1&href=satyamkushwaha10c@gmail.com&su=Hiring!" target="_blank">
                    <button className="hidden md:block mx-1 h-[2rem] w-16 ring-2 ring-[#84CC16] 
                    flex items-center justify-center p-1 rounded cursor-pointer text-white hover:scale-[1.02] transition ease-in-out">
                        Hire me
                    </button>
                </Link>

                <div className="mx-1 h-[2rem] ring-2 ring-[#84CC16] flex md:hidden 
                    items-center p-2 rounded bg-[#84CC16] cursor-pointer"
                    onClick={() => setNavIsOpen(!navIsOpen)}>
                    {navIsOpen ? <CloseIcon /> : <MenuIcon />}
                </div>
            </div>

            {navIsOpen && (
                <div className="absolute top-24 left-0 w-full p-4 flex flex-col gap-4 md:hidden bg-white/30 backdrop-blur-xl text-[var(--primary)]">
                    <button onClick={() => setActiveSection("home")} className="flex gap-2 items-center">
                        <HomeIcon /><Link to="/" onClick={() => setNavIsOpen(!navIsOpen)}> Home</Link>
                    </button>
                    <button onClick={() => setActiveSection("about")} className="flex gap-2 items-center">
                        <PersonIcon /><Link to="/about" onClick={() => setNavIsOpen(!navIsOpen)}> About</Link>
                    </button>
                    <button onClick={() => setActiveSection("project")} className="flex gap-2 items-center">
                        <FolderIcon /><Link to="/project" onClick={() => setNavIsOpen(!navIsOpen)}> Project</Link>
                    </button>
                    <button onClick={() => setActiveSection("contact")} className="flex gap-2 items-center">
                        <MailIcon /><Link to="/contact" onClick={() => setNavIsOpen(!navIsOpen)}> Contact</Link>
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
