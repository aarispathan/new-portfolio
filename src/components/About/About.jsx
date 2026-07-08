import { Container, Row, Col } from "react-bootstrap";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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

    const titleY = useSpring(
        useTransform(scrollYProgress, [0, 1], [80, -60]),
        { stiffness: 80, damping: 20 }
    );

    const leftX = useSpring(
        useTransform(scrollYProgress, [0, 1], [-100, 60]),
        { stiffness: 80, damping: 20 }
    );

    const rightX = useSpring(
        useTransform(scrollYProgress, [0, 1], [100, -60]),
        { stiffness: 80, damping: 20 }
    );

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0, 1, 1, 0]
    );

    const scale = useSpring(
        useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]),
        { stiffness: 80, damping: 18 }
    );

    const cards = [
        {
            Icon: FaProjectDiagram,
            number: "20+",
            title: "Projects Completed"
        },
        {
            Icon: FaLaptopCode,
            number: "1+",
            title: "Years Learning"
        },
        {
            Icon: FaCode,
            number: "10+",
            title: "Technologies"
        }
    ];

    const skills = [
        "React.js",
        "JavaScript",
        "Bootstrap",
        "Vite",
        "GSAP",
        "Framer Motion",
        "Firebase",
        "Wix Studio"
    ];

    return (

        <section
            className="about-section"
            id="about"
            ref={ref}
        >

            <div className="about-glow"></div>

            <Container>

                <motion.div
                    className="section-header"
                    style={{
                        y: titleY,
                        opacity
                    }}
                >

                    <span>ABOUT ME</span>

                    <h2>
                        Passionate <span>Frontend Developer</span>
                    </h2>

                </motion.div>

                <Row className="align-items-center gy-5">

                    <Col lg={6}>

                        <motion.div
                            style={{
                                x: leftX,
                                opacity,
                                scale
                            }}
                        >

                            <p className="about-text">

                                I am a passionate Frontend Developer with
                                experience building responsive and modern web
                                applications using React.js, Vite,
                                Bootstrap, GSAP and Framer Motion.

                                I enjoy creating premium user interfaces,
                                smooth animations and interactive web
                                experiences.

                            </p>

                            <div className="skills-wrapper">

                                {skills.map((skill, index) => (

                                    <motion.span

                                        key={index}

                                        initial={{
                                            opacity: 0,
                                            y: 25
                                        }}

                                        whileInView={{
                                            opacity: 1,
                                            y: 0
                                        }}

                                        transition={{
                                            delay: index * 0.08
                                        }}

                                        viewport={{
                                            once: true
                                        }}

                                        whileHover={{
                                            scale: 1.08,
                                            y: -5
                                        }}

                                    >

                                        {skill}

                                    </motion.span>

                                ))}

                            </div>

                        </motion.div>

                    </Col>

                    <Col lg={6}>

                        <motion.div
                            className="stats-grid"
                            style={{
                                x: rightX,
                                opacity,
                                scale
                            }}
                        >

                            {cards.map((card, index) => {

                                const Icon = card.Icon;

                                return (

                                    <motion.div

                                        key={index}

                                        className="stat-card"

                                        initial={{
                                            opacity: 0,
                                            y: 70
                                        }}

                                        whileInView={{
                                            opacity: 1,
                                            y: 0
                                        }}

                                        viewport={{
                                            once: true
                                        }}

                                        transition={{
                                            duration: .7,
                                            delay: index * .15
                                        }}

                                        whileHover={{
                                            y: -12,
                                            rotateX: 5,
                                            rotateY: -5
                                        }}

                                    >

                                        <div className="stat-icon">

                                            <Icon />

                                        </div>

                                        <h3>{card.number}</h3>

                                        <p>{card.title}</p>

                                    </motion.div>

                                );

                            })}

                        </motion.div>

                    </Col>

                </Row>

            </Container>

        </section>

    );

}

export default About;