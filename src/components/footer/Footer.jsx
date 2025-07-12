import React from 'react';
import './footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaHeart, FaGithub, FaXTwitter } from "react-icons/fa6";
import { MdOutlineCodeOff } from "react-icons/md";

function Footer() {
    return (
        <footer className="footer-section">
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <a href="https://www.instagram.com/aaris_pathan_90/" target='_blank' ><FaInstagram /></a>
                        <a href="https://github.com/aarispathan" target='_blank' ><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/aaris-pathan-660054277/" target='_blank' ><FaLinkedinIn /></a>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaXTwitter /></a>
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
