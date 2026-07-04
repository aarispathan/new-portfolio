import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaArrowUp
} from "react-icons/fa";

import "./Footer.css";

function Footer() {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="footer">

            <div className="footer-divider"></div>

            <div className="footer-content">

                <h2>
                    Aaris<span>.</span>
                </h2>

                <p>
                    Frontend Developer passionate about
                    building modern, responsive and
                    interactive web experiences.
                </p>

                <div className="footer-socials">

                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedinIn />
                    </a>

                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaInstagram />
                    </a>
                    <button
                        className="scroll-top-btn"
                        onClick={scrollTop}
                    >
                        <FaArrowUp />
                    </button>
                </div>



                <div className="footer-bottom">
                    © 2026 Aaris. All Rights Reserved.
                </div>

            </div>

        </footer>
    );
}

export default Footer;