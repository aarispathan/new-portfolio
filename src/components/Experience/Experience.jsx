import { Container } from "react-bootstrap";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef } from "react";
import {
    FaLocationDot,
    FaArrowTrendUp
} from "react-icons/fa6";
import { RiMedal2Fill } from "react-icons/ri";
import "./Experience.css";

function Experience() {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const titleY = useTransform(scrollYProgress, [0, 1], [60, 0]);
    const titleOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const smoothTitleY = useSpring(titleY, { stiffness: 70, damping: 20 });

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

    const experiences = [
        {
            type: "Training",
            role: "React.js Developer Training",
            company: "LogicRays Academy",
            location: "Ahmedabad, India",
            description:
                "Gained comprehensive knowledge in modern frontend development and React ecosystem with real-world project exposure.",
            achievements: [
                "Completed 3 client projects",
                "Mastered React fundamentals",
                "Team collaboration experience",
                "Code review participation"
            ],
            technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "React"]
        },
        // {
        //     year: "2025 - Present",
        //     type: "Full-Time",
        //     role: "React.js Developer",
        //     company: "Web Studio",
        //     location: "Jaipur, Rajasthan",
        //     description:
        //         "Leading frontend development with scalable UI systems and performance-focused applications.",
        //     achievements: [
        //         "Built 5+ production apps",
        //         "Improved performance by 40%",
        //         "Implemented reusable architecture",
        //         "CI/CD integration"
        //     ],
        //     technologies: ["React", "Redux", "Tailwind", "JavaScript"]
        // }
    ];

    return (
        <section className="experience-section" id="experience" ref={ref}>

            <Container>

                <motion.div
                    className="section-title"
                    style={{ y: smoothTitleY, opacity: titleOpacity }}
                >
                    <span>MY JOURNEY</span>
                    <h2>Work <span>Experience</span></h2>
                </motion.div>

                <div className="timeline">

                    {experiences.map((item, index) => (

                        <motion.div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >

                            <motion.div
                                className="timeline-content"
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
                                whileHover={{ scale: 1.02 }}
                            >

                                <span className="timeline-type">{item.type}</span>

                                <h3>{item.role}</h3>
                                <h5>{item.company}</h5>

                                <h6 className="timeline-location">
                                    <FaLocationDot />
                                    {item.location}
                                </h6>

                                <p>{item.description}</p>

                                <div className="achievement-section">

                                    <h4>
                                        <RiMedal2Fill />
                                        Key Achievements
                                    </h4>

                                    {item.achievements.map((a, i) => (
                                        <div key={i} className="achievement-item">
                                            <FaArrowTrendUp />
                                            <span>{a}</span>
                                        </div>
                                    ))}

                                </div>

                                <div className="tech-wrapper">

                                    <h4>Technologies</h4>

                                    <div className="tech-tags">
                                        {item.technologies.map((t, i) => (
                                            <span key={i}>{t}</span>
                                        ))}
                                    </div>

                                </div>

                            </motion.div>

                        </motion.div>

                    ))}

                </div>

            </Container>

        </section>
    );
}

export default Experience;