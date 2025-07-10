/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { WiStars } from "react-icons/wi";
import { HeroGrid } from "./HeroGrid";
import { RiDownloadLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './hero.css';

function Hero() {

    const handleDownload = async (e) => {
        e.preventDefault();

        const toastId = toast.loading("Checking resume...");

        try {
            const response = await fetch("/aarispathan.pdf", { method: "HEAD" });

            if (response.ok) {
                toast.update(toastId, {
                    render: "CV download",
                    type: "success",
                    isLoading: false,
                    autoClose: 2000,
                    closeOnClick: true,
                });

                const link = document.createElement("a");
                link.href = "/aarispathan.pdf";
                link.download = "aarispathan.pdf";
                link.click();
            } else {
                throw new Error("File not found");
            }
        } catch (error) {
            toast.update(toastId, {
                render: "CV file not found!",
                type: "error",
                isLoading: false,
                autoClose: 2000,
                closeOnClick: true,
            });
        }
    };
    return (
        <div className="hero-section" id='home' >
            <Container>
                <Row>
                    <Col md={12} lg={12}>
                        <div className="hero-section-content" >
                            <h3 className="hero-subheading"><WiStars className='heading-icon' /> Hello, I'm</h3>
                            <h1 className="hero-heading">Aaris Pathan</h1>
                            <h3 className="hero-subheading">React.js Developer at <br /> Web Studio</h3>
                            <p className="hero-paragraph">
                                I specialize in designing and developing dynamic, scalable, and user-centric web applications using React.js and modern technologies. Passionate about creating exceptional digital experiences that drive business growth.
                            </p>
                            <div className='hero-btn'>
                                <button className="button"
                                    onClick={() => {
                                        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                                    }}>
                                    Contact Now <FiUser className="icon" />
                                </button>
                                <button className='button' onClick={handleDownload}>
                                    <a href="/aarispathan.pdf" download>
                                        <span>Download CV <RiDownloadLine className='icon' /></span>
                                    </a>
                                </button>
                            </div>
                            <div className='hero-section-bottom' >
                                <div>
                                    <h3>1+</h3>
                                    <p>Years Experience</p>
                                </div>
                                <div>
                                    <h3>5+</h3>
                                    <p>Projects Completed</p>
                                </div>
                                <div>
                                    <h3>100%</h3>
                                    <p>Client Satisfaction</p>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
            <HeroGrid />
        </div>
    );
}

export default Hero;
