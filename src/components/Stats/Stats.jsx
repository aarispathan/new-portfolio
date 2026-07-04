import { Container, Row, Col } from "react-bootstrap";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef } from "react";
import {
    FaProjectDiagram,
    FaCode,
    FaUsers,
    FaAward,
} from "react-icons/fa";

import "./Stats.css";

function Stats() {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const sectionY = useTransform(scrollYProgress, [0, 1], [80, 0]);
    const sectionOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const smoothY = useSpring(sectionY, { stiffness: 70, damping: 20 });

    const mx = useMotionValue(0);
    const my = useMotionValue(0);

    const rotateX = useTransform(my, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(mx, [-0.5, 0.5], [-10, 10]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mx.set(x);
        my.set(y);
    };

    const stats = [
        { icon: <FaProjectDiagram />, number: 10, suffix: "+", title: "Projects Completed" },
        { icon: <FaCode />, number: 1, suffix: "+", title: "Years Experience" },
        { icon: <FaUsers />, number: 15, suffix: "+", title: "Happy Clients" },
        { icon: <FaAward />, number: 100, suffix: "%", title: "Client Satisfaction" },
    ];

    return (
        <section className="stats-section" ref={ref}>

            <Container>

                <motion.div
                    style={{ y: smoothY, opacity: sectionOpacity }}
                >
                    <Row className="g-4">

                        {stats.map((item, index) => (
                            <Col lg={3} md={6} key={index}>

                                <motion.div
                                    className="stat-box"
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={() => {
                                        mx.set(0);
                                        my.set(0);
                                    }}
                                    style={{
                                        rotateX,
                                        rotateY,
                                        transformPerspective: 1000
                                    }}
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="stat-icon">{item.icon}</div>

                                    <h2>
                                        {item.number}{item.suffix}
                                    </h2>

                                    <p>{item.title}</p>
                                </motion.div>

                            </Col>
                        ))}

                    </Row>
                </motion.div>

            </Container>

        </section>
    );
}

export default Stats;