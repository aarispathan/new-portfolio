import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Container, Navbar, Nav } from "react-bootstrap";
import Logo from "../../assets/Logo.png";
import "./Navbar.css";
import { FaMoon, FaSun } from "react-icons/fa";

function CustomNavbar() {
    const [activeSection, setActiveSection] = useState("home");
    const { darkMode, setDarkMode } = useTheme();

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.4,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            // Remove the hash from the URL
            window.history.replaceState(null, "", window.location.pathname);
        }
    };

    return (
        <Navbar expand="lg" fixed="top" className="custom-navbar">
            <Container>
                <Navbar.Brand href="#home" className="logo">
                    <img src={Logo} alt="" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mx-auto">

                        <Nav.Link
                            href="#home"
                            className={activeSection === "home" ? "active-link" : ""}
                        >
                            Home
                        </Nav.Link>

                        <Nav.Link
                            onClick={() => scrollToSection("about")}
                            className={activeSection === "about" ? "active-link" : ""}
                            style={{ cursor: "pointer" }}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => scrollToSection("services")}
                            className={activeSection === "services" ? "active-link" : ""}
                            style={{ cursor: "pointer" }}
                        >
                            Services
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => scrollToSection("experience")}
                            className={activeSection === "experience" ? "active-link" : ""}
                            style={{ cursor: "pointer" }}
                        >
                            Experience
                        </Nav.Link>

                        <Nav.Link
                            onClick={() => scrollToSection("projects")}
                            className={activeSection === "projects" ? "active-link" : ""}
                            style={{ cursor: "pointer" }}
                        >
                            Projects
                        </Nav.Link>

                        <Nav.Link
                            onClick={() => scrollToSection("contact")}
                            className={activeSection === "contact" ? "active-link" : ""}
                            style={{ cursor: "pointer" }}
                        >
                            Contact
                        </Nav.Link>
                        <button
                            className="theme-toggle"
                            onClick={() =>
                                setDarkMode(!darkMode)
                            }
                        >
                            {darkMode ? <FaSun /> : <FaMoon />}
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;