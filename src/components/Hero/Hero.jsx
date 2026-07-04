import { Container, Row, Col } from "react-bootstrap";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import {
    FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub
} from "react-icons/fa";
import { SiBootstrap, SiVite } from "react-icons/si";
import ProfilePic from "../../assets/profile.png";
import "./Hero.css";

function Hero({ loading }) {

    const { scrollY } = useScroll();

    const textY = useTransform(scrollY, [0, 500], [0, -60]);
    const imageY = useTransform(scrollY, [0, 500], [0, -120]);
    const imageScale = useTransform(scrollY, [0, 500], [1, 1.08]);

    const smoothTextY = useSpring(textY, { stiffness: 80, damping: 20 });
    const smoothImageY = useSpring(imageY, { stiffness: 80, damping: 20 });
    const smoothImageScale = useSpring(imageScale, { stiffness: 80, damping: 20 });

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const xPos = (e.clientX - rect.left) / rect.width - 0.5;
        const yPos = (e.clientY - rect.top) / rect.height - 0.5;

        x.set(xPos);
        y.set(yPos);
    };

    const container = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.2 }
        }
    };

    const left = {
        hidden: { opacity: 0, x: -120 },
        show: { opacity: 1, x: 0, transition: { duration: 1 } }
    };

    const right = {
        hidden: { opacity: 0, x: 120, scale: 0.9 },
        show: { opacity: 1, x: 0, scale: 1, transition: { duration: 1.2 } }
    };

    return (
        <section className="hero-section" id="home">

            <div className="hero-bg-glow"></div>

            <Container>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={loading ? "hidden" : "show"}
                >

                    <Row className="align-items-center hero-row">

                        {/* LEFT TEXT */}
                        <Col lg={6}>
                            <motion.div
                                variants={left}
                                style={{
                                    y: smoothTextY
                                }}
                            >
                                <span className="hero-subtitle">👋 Hello, I'm</span>

                                <h1 className="hero-title">
                                    Aaris <span>Pathan</span>
                                </h1>

                                <h2 className="hero-role">
                                    Frontend Developer & UI Designer
                                </h2>

                                <p className="hero-description">
                                    I build modern, responsive and high-performance web applications
                                    using React.js, Bootstrap, Framer Motion and modern frontend tools.
                                </p>

                                <div className="hero-buttons">
                                    <a href="#projects" className="btn-primary-custom">
                                        View Projects
                                    </a>
                                    <a href="/aaris-pathan.pdf" download className="btn-outline-custom">
                                        Download CV
                                    </a>
                                </div>

                                <div className="tech-icons">
                                    <FaReact />
                                    <FaHtml5 />
                                    <FaCss3Alt />
                                    <FaJs />
                                    <SiBootstrap />
                                    <SiVite />
                                    <FaGithub />
                                </div>
                            </motion.div>
                        </Col>

                        {/* RIGHT IMAGE */}
                        <Col lg={6}>
                            <motion.div
                                className="hero-image-wrapper"
                                variants={right}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={() => {
                                    x.set(0);
                                    y.set(0);
                                }}
                                style={{ perspective: "1200px" }}
                            >
                                <div className="glow-circle"></div>

                                <motion.img
                                    src={ProfilePic}
                                    alt="Aaris Pathan"
                                    className="hero-image"
                                    style={{
                                        y: smoothImageY,
                                        scale: smoothImageScale,
                                        rotateX,
                                        rotateY,
                                        willChange: "transform"
                                    }}
                                />
                            </motion.div>
                        </Col>

                    </Row>

                </motion.div>

            </Container>
        </section>
    );
}

export default Hero;