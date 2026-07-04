import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import "./ProjectModal.css";

function ProjectModal({ project, onClose }) {
    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    className="modal-overlay"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                        initial={{
                            scale: 0.8,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        exit={{
                            scale: 0.8,
                            opacity: 0,
                        }}
                    >
                        <button
                            className="close-btn"
                            onClick={onClose}
                        >
                            <FaTimes />
                        </button>

                        <img
                            src={project.image}
                            alt={project.title}
                        />

                        <h2>{project.title}</h2>

                        <p>{project.description}</p>

                        <div className="modal-tech">
                            {project.tech.map((tech, index) => (
                                <span key={index}>
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="modal-buttons">
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaExternalLinkAlt />
                                Live Demo
                            </a>

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub />
                                GitHub
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default ProjectModal;