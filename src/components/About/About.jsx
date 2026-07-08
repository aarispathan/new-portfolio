import { Container, Row, Col } from "react-bootstrap";
import {
    motion,
    useScroll,
    useTransform,
    useSpring
} from "framer-motion";
import { useRef } from "react";

import {
    FaCode,
    FaLaptopCode,
    FaProjectDiagram,
} from "react-icons/fa";

import "./About.css";

function About() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Section Title
    const titleY = useTransform(scrollYProgress, [0, 0.5], [80, 0]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const smoothTitleY = useSpring(titleY, {
        stiffness: 70,
        damping: 20
    });

    // Left Content
    const leftY = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const leftOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
    const smoothLeftY = useSpring(leftY, {
        stiffness: 70,
        damping: 20
    });

    // Right Cards
    const rightY = useTransform(scrollYProgress, [0, 1], [120, 0]);
    const rightOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
    const smoothRightY = useSpring(rightY, {
        stiffness: 70,
        damping: 20
    });

    return (
        <section className="about-section" id="about" ref={ref}>
            <Container>

                <motion.div
                    className="section-header"
                    style={{
                        y: smoothTitleY,
                        opacity: titleOpacity,
                    }}
                >
                    <span>ABOUT ME</span>
                    <h2>
                        Passionate <span>Frontend Developer</span>
                    </h2>
                </motion.div>

                <Row >

                    {/* Left Side */}
                    <Col lg={6}>
                        <motion.div
                            style={{
                                y: smoothLeftY,
                                opacity: leftOpacity,
                            }}
                        >
                            <p className="about-text">
                                I am a passionate Frontend Developer with
                                experience building responsive and interactive
                                web applications using React.js, Vite,
                                Bootstrap, Framer Motion, GSAP and modern
                                web technologies.

                                I enjoy creating visually appealing interfaces,
                                smooth user experiences and scalable
                                frontend solutions.
                            </p>
                            <div className="about-divider"></div>
                            <div className="skills-wrapper">

                                <span>React.js</span>
                                <span>JavaScript</span>
                                <span>Bootstrap</span>
                                <span>Vite</span>
                                <span>GSAP</span>
                                <span>Framer Motion</span>
                                <span>Firebase</span>
                                <span>Wix Studio</span>

                            </div>
                        </motion.div>
                    </Col>

                    {/* Right Side */}
                    <Col lg={6}>
                        <motion.div
                            className="stats-grid"
                            style={{
                                y: smoothRightY,
                                opacity: rightOpacity,
                            }}
                        >

                            <motion.div
                                whileHover={{
                                    y: -10,
                                    scale: 1.04,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 18,
                                }}
                                className="stat-card"
                            >
                                <FaProjectDiagram />
                                <h3>20+</h3>
                                <p>Projects Completed</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -10 }}
                                className="stat-card"
                            >
                                <FaLaptopCode />
                                <h3>1+</h3>
                                <p>Years Learning</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -10 }}
                                className="stat-card"
                            >
                                <FaCode />
                                <h3>10+</h3>
                                <p>Technologies</p>
                            </motion.div>

                        </motion.div>
                    </Col>

                </Row>

            </Container>
        </section>
    );
}

export default About;