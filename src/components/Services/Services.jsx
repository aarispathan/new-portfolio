import { Container, Row, Col } from "react-bootstrap";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FaReact, FaPalette, FaMobileAlt, FaRocket } from "react-icons/fa";
import "./Services.css";
import { useRef } from "react";

function Services() {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const titleY = useTransform(scrollYProgress, [0, 0.5], [80, 0]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    const smoothTitleY = useSpring(titleY, { stiffness: 70, damping: 20 });

    const services = [
        {
            icon: <FaReact />,
            title: "Frontend Development",
            description:
                "Building modern, scalable and responsive web applications using React.js, Vite and Bootstrap."
        },
        {
            icon: <FaPalette />,
            title: "UI/UX Design",
            description:
                "Creating beautiful, user-friendly interfaces with strong usability focus."
        },
        {
            icon: <FaMobileAlt />,
            title: "Responsive Design",
            description:
                "Seamless experience across all devices and screen sizes."
        },
        {
            icon: <FaRocket />,
            title: "Performance Optimization",
            description:
                "Optimized websites for speed, SEO and smooth interactions."
        }
    ];

    const cardY = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const cardOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

    return (
        <section className="services-section" id="services" ref={ref}>

            <Container>

                <motion.div
                    className="section-title"
                    style={{
                        y: smoothTitleY,
                        opacity: titleOpacity
                    }}
                >
                    <span>WHAT I DO</span>
                    <h2>My <span>Services</span></h2>
                </motion.div>

                <Row className="g-4">

                    {services.map((service, index) => (

                        <Col lg={3} md={6} key={index}>

                            <motion.div
                                className="service-card"
                                style={{
                                    y: cardY,
                                    opacity: cardOpacity
                                }}
                                whileHover={{
                                    y: -12,
                                    scale: 1.04
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 18
                                }}
                            >

                                <motion.div
                                    className="service-icon"
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                >
                                    {service.icon}
                                </motion.div>

                                <h3>{service.title}</h3>
                                <p>{service.description}</p>

                            </motion.div>

                        </Col>

                    ))}

                </Row>

            </Container>

        </section>
    );
}

export default Services;