import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { MdCodeOff, MdOutlineTimeline } from "react-icons/md";
import { RiHome9Line } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import AKLogo from '../../assets/Logo.png'
import './header.css';

function useScrollSpy() {
    const [activeSection, setActiveSection] = useState('home');
    const sections = ['home', 'about', 'skills', 'experience', 'contact'];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    },);

    return activeSection;
}

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const activeSection = useScrollSpy();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className='header-section'>
            <Container>
                <Row>
                    <nav className="navbar">
                        <div className="logo">
                            <img src={AKLogo} alt="Logo" />
                        </div>
                        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                            <span></span><span></span><span></span>
                        </div>
                        <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
                            <li><a href="#home" className={activeSection === 'home' ? 'active-link' : ''}><RiHome9Line className='links-icon' /> Home</a></li>
                            <li><a href="#about" className={activeSection === 'about' ? 'active-link' : ''}><FiUser className='links-icon' /> About</a></li>
                            <li><a href="#projects" className={activeSection === 'projects' ? 'active-link' : ''}><MdCodeOff className='links-icon' /> Projects</a></li>
                            <li><a href="#experience" className={activeSection === 'experience' ? 'active-link' : ''}><MdOutlineTimeline className='links-icon' /> Experience</a></li>
                            <li><a href="#contact" className={activeSection === 'contact' ? 'active-link' : ''}><FiPhoneCall className='links-icon' /> Contact us</a></li>
                        </ul>
                    </nav>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
