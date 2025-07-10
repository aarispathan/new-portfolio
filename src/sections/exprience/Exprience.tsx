import React from "react";
import { Timeline } from "./Timeline";
import { Col, Container, Row } from "react-bootstrap";
import { FaLocationDot, FaArrowTrendUp } from "react-icons/fa6";
import { RiMedal2Fill } from "react-icons/ri";
import './exprience.css';

export function Exprience() {
    const data = [
        {
            title: "Training",
            content: (
                <div className="timeline-card">
                    <h4>React.js Developer Training</h4>
                    <h5>LogicRays Academy</h5>
                    <h6>
                        <FaLocationDot /> Ahmedabad, India
                    </h6>
                    <p className="experience-description">
                        Gained comprehensive knowledge and practical experience in modern
                        frontend development. Worked on real‑world projects that enhanced
                        skills in building responsive, component‑based web apps with
                        React.js.
                    </p>

                    <h3>
                        <RiMedal2Fill /> Key Achievements
                    </h3>
                    <p className="experience-description">
                        <FaArrowTrendUp /> Successfully completed 3 client projects
                    </p>
                    <p className="experience-description">
                        <FaArrowTrendUp /> Learned advanced React concepts & best practices
                    </p>
                    <p className="experience-description">
                        <FaArrowTrendUp /> Collaborated with senior developers on complex
                        features
                    </p>
                    <p className="experience-description">
                        <FaArrowTrendUp /> Contributed to code reviews & team knowledge
                        sharing
                    </p>

                    <div className="tech-wrapper">
                        <h4>Technologies Learned :</h4>
                        <div className="tech-tags">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Bootstrap</span>
                            <span>JavaScript</span>
                            <span>React JS</span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Full‑time",
            content: (
                <div className="timeline-card card-right-side">
                    <h4>React.js Developer</h4>
                    <h5>Web Studio</h5>
                    <h6>
                        <FaLocationDot /> Jaipur, Rajasthan, India
                    </h6>
                    <p className="experience-description">
                        Leading frontend initiatives, designing and developing dynamic,
                        scalable, user‑centric web apps. Transforming UI/UX designs into
                        high‑performance solutions using React.js and modern tooling.
                    </p>

                    <h3>
                        <RiMedal2Fill /> Key Achievements
                    </h3>
                    <p className="experience-description">
                        <FaArrowTrendUp /> Delivered 5 + enterprise‑level web applications
                    </p>
                    <p className="experience-description">
                        <FaArrowTrendUp /> Improved performance by 40 % through optimisation
                    </p>
                    <p className="experience-description">
                        <FaArrowTrendUp /> Implemented CI/CD & modern dev practices
                    </p>

                    <div className="tech-wrapper">
                        <h4>Technologies Used :</h4>
                        <div className="tech-tags">
                            <span>HTML/CSS</span>
                            <span>Tailwind</span>
                            <span>Redux</span>
                            <span>Bootstrap</span>
                            <span>JavaScript</span>
                            <span>React JS</span>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section className="experience-section" id="experience">
            <Container>
                <Row>
                    <Col>
                        <Timeline data={data} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
