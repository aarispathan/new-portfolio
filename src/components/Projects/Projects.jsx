import { useState, useRef } from "react";
import ProjectModal from "./ProjectModal";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "./Projects.css";

import turboShine from "../../assets/turbo-shine.png";
import recipeFinder from "../../assets/recipe-finder.png";
import trello from "../../assets/trello.png";
import Sellsharp from "../../assets/sellsharp-landing.png";
import movinza from "../../assets/movinza.png";

function Projects() {

    const ref = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState("All");

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"]
    });

    const titleY = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const smoothTitleY = useSpring(titleY, { stiffness: 80, damping: 20 });

    const projects = [
        {
            title: "Turbo Shine",
            category: "API",
            image: turboShine,
            description: "Professional e-commerce website for electronics.",
            tech: ["HTML", "CSS", "Bootstrap", "React JS", "Firebase"],
            live: "https://turbo-shine-ak.vercel.app/",
            github: "https://github.com/aarispathan/turbo-shine"
        },
        {
            title: "Trello Clone",
            category: "React",
            image: trello,
            description: "Drag & drop task management app.",
            tech: ["React JS", "Tailwind", "DnD"],
            live: "#",
            github: "#"
        },
        {
            title: "Recipe Finder",
            category: "API",
            image: recipeFinder,
            description: "Recipe search app with API integration.",
            tech: ["React JS", "Bootstrap", "API"],
            live: "#",
            github: "#"
        },
        {
            title: "Movinza",
            category: "API",
            image: movinza,
            description: "Movie search app using TMDb API.",
            tech: ["React JS", "Vite"],
            live: "#",
            github: "#"
        },
        {
            title: "Sellsharp Landing Page",
            category: "UI Design",
            image: Sellsharp,
            description: "Modern SaaS landing page UI.",
            tech: ["React JS", "Framer Motion"],
            live: "#",
            github: "#"
        }
    ];

    const filters = [
        { name: "All" },
        { name: "React" },
        { name: "API" },
        { name: "UI Design" }
    ];

    return (
        <section className="projects-section" id="projects" ref={ref}>

            <Container>

                {/* CINEMATIC TITLE */}
                <motion.div
                    className="section-title"
                    style={{
                        y: smoothTitleY,
                        opacity: titleOpacity
                    }}
                >
                    <span>PORTFOLIO</span>
                    <h2>Featured <span>Projects</span></h2>
                </motion.div>

                {/* FILTER */}
                <div className="filter-buttons">
                    {filters.map((item) => (
                        <button
                            key={item.name}
                            className={filter === item.name ? "active" : ""}
                            onClick={() => setFilter(item.name)}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                {/* PROJECT GRID */}
                <Row className="g-4">

                    {projects
                        .filter(p => filter === "All" || p.category === filter)
                        .map((project, index) => (
                            <Col lg={6} key={index}>
                                <ProjectCard
                                    project={project}
                                    index={index}
                                    scrollYProgress={scrollYProgress}
                                    onClick={setSelectedProject}
                                />
                            </Col>
                        ))}
                </Row>

            </Container>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}

export default Projects;