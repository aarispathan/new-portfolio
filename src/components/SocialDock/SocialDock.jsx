import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaEnvelope
} from "react-icons/fa";

import "./SocialDock.css";

function SocialDock() {
    return (
        <div className="social-dock">

            <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub />
                <span>GitHub</span>
            </a>

            <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
            >
                <FaLinkedinIn />
                <span>LinkedIn</span>
            </a>

            <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noreferrer"
            >
                <FaInstagram />
                <span>Instagram</span>
            </a>

            <a href="#contact">
                <FaEnvelope />
                <span>Contact</span>
            </a>

        </div>
    );
}

export default SocialDock;