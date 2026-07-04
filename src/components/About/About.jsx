import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
    FaCode,
    FaLaptopCode,
    FaProjectDiagram,
} from "react-icons/fa";
import "./About.css";

function About() {
    return (
        <section className="about-section" id="about">
            <Container>

                <motion.div
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="section-header"
                >
                    <span>ABOUT ME</span>
                    <h2>
                        Passionate <span>Frontend Developer</span>
                    </h2>
                </motion.div>

                <Row className="align-items-center gy-5">

                    {/* Left Side */}
                    <Col lg={6}>
                        <motion.div
                            initial={{ opacity: 0, x: -70 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
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
                        <div className="stats-grid">

                            <motion.div
                                whileHover={{ y: -10 }}
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

                        </div>
                    </Col>

                </Row>

            </Container>
        </section>
    );
}

export default About;