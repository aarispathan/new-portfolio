import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { RiShareBoxFill } from "react-icons/ri";
import TurboShineIMG from '../../assets/turbo-shine.png'
import './projects.css'

function Projects() {
    return (
        <section id="projects" className='project-section'>
            <Container>
                <Row>
                    <Col xl={12} >
                        <div className='project-title'>
                            <h1>Projects</h1>
                        </div>
                    </Col>
                    <Col xl={6} className='projects-row projects-row-one' >
                        <div className="project-image">
                            <h2>Turbo Shine</h2>
                            <a href="https://turbo-shine-ak.vercel.app/" target='_blank'> <img src={TurboShineIMG} alt="Turbo Shine Project Preview" /></a>
                        </div>
                    </Col>
                    <Col xl={6} className='projects-row projects-row-two'>
                        <div className="project-details">
                            <div className="project-content">
                                <h2>Turbo Shine</h2>
                                <h4>E-Commerce Platform</h4>
                                <p>Professional e-commerce website for electronics with modern design, secure payment integration, inventory management, and comprehensive admin dashboard for seamless online shopping experience.</p>
                            </div>
                            <div className="project-technologies">
                                <h4>Technologies Used :</h4>
                                <div className="tech-tags">
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>Bootstrap</span>
                                    <span>JAVASCRIPT</span>
                                    <span>REACT JS</span>
                                    <span>Firebase</span>
                                </div>
                            </div>
                            <div className="project-features">
                                <h4>Key Features:</h4>
                                <ul>
                                    <li>Secure user authentication and admin panel</li>
                                    <li>Responsive product listing with filters</li>
                                    <li>Real-time inventory & order management</li>
                                </ul>
                            </div>
                            <div className="project-buttons">
                                <button className="button" onClick={() => window.open('https://turbo-shine-ak.vercel.app/', '_blank', 'noopener,noreferrer')} >
                                    <span>
                                        Live Demo <RiShareBoxFill className="icon" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} className='projects-row projects-row-three' >
                        <div className="project-details">
                            <div className="project-content">
                                <h2>Turbo Shine</h2>
                                <h4>E-Commerce Platform</h4>
                                <p>Professional e-commerce website for electronics with modern design, secure payment integration, inventory management, and comprehensive admin dashboard for seamless online shopping experience.</p>
                            </div>
                            <div className="project-technologies">
                                <h4>Technologies Used :</h4>
                                <div className="tech-tags">
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>Bootstrap</span>
                                    <span>JAVASCRIPT</span>
                                    <span>REACT JS</span>
                                    <span>Firebase</span>
                                </div>
                            </div>
                            <div className="project-features">
                                <h4>Key Features:</h4>
                                <ul>
                                    <li>Secure user authentication and admin panel</li>
                                    <li>Responsive product listing with filters</li>
                                    <li>Real-time inventory & order management</li>
                                </ul>
                            </div>
                            <div className="project-buttons">
                                <button className="button" onClick={() => window.open('https://turbo-shine-ak.vercel.app/', '_blank', 'noopener,noreferrer')} >
                                    <span>
                                        Live Demo <RiShareBoxFill className="icon" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} className='projects-row projects-row-four'>
                        <div className="project-image">
                            <h2>Turbo Shine</h2>
                            <a href="https://turbo-shine-ak.vercel.app/" target='_blank'> <img src={TurboShineIMG} alt="Turbo Shine Project Preview" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Projects
