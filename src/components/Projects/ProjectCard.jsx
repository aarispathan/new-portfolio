import { motion, useTransform, useSpring } from "framer-motion";
import "./Projects.css";

function ProjectCard({ project, index, scrollYProgress, onClick }) {

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [120 + index * 30, 0]
    );

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.6],
        [0, 1]
    );

    const scale = useTransform(
        scrollYProgress,
        [0, 1],
        [0.9, 1]
    );

    const smoothY = useSpring(y, { stiffness: 80, damping: 20 });

    return (
        <motion.div
            className="project-card"
            style={{
                y: smoothY,
                opacity,
                scale
            }}
            whileHover={{
                scale: 1.05,
                rotateX: 3,
                rotateY: -3
            }}
            transition={{ duration: 0.4 }}
            onClick={() => onClick(project)}
        >

            <div className="project-image">
                <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tech-stack">
                    {project.tech.map((t, i) => (
                        <span key={i}>{t}</span>
                    ))}
                </div>

                <div className="project-buttons">
                    <a href={project.live} target="_blank">Live</a>
                    <a href={project.github} target="_blank">GitHub</a>
                </div>

            </div>

        </motion.div>
    );
}

export default ProjectCard;