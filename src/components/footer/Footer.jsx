import React from 'react';
import './footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaHeart, FaGithub } from "react-icons/fa6";
import { MdOutlineCodeOff } from "react-icons/md";
import { GoArrowUp } from "react-icons/go";

function Footer() {
    return (
        <footer className="footer-section">
            <Container>
                
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaGithub /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#contact">Contact us</a></li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center">
                        <div className="footer-copy">
                            © 2025 Made with <FaHeart className='heart-icon' /> and <MdOutlineCodeOff className='code-icon' /> by Aaris Pathan
                        </div>
                    </Col>
                </Row>

            </Container>
        </footer>
    );
}

export default Footer;
