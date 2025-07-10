import './about.css';
import { Col, Container, Row } from 'react-bootstrap';
import { GoDownload } from "react-icons/go";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
    return (
        <section className="about-section" id='about' >
            <Container>
                <Row>
                    <Col>
                        <div>
                            <div className='about-title'>
                                <h1>ABOUT</h1>
                            </div>
                            <div className="about-container">
                                <div className="personal-info">
                                    <h3>Personal Information</h3>
                                    <ul>
                                        <li><span>First Name :</span> Aaris Pathan</li>
                                        <li><span>Age :</span> 20</li>
                                        <li><span>Nationality :</span> Indian</li>
                                        <li><span>Freelance :</span> Available</li>
                                        <li><span>Address :</span> Ahmedabad, Gujarat</li>
                                        <li><span>Phone :</span> +91 90549 63110</li>
                                        <li><span>Email :</span> aarispathan15@gmail.com</li>
                                        <li><span>Languages :</span> English, Hindi, Gujarati</li>
                                        <li><span>Github :</span> <a href="#" className="github-link">Open</a></li>
                                        <li><span>LinkedIn :</span> <a href="#" className="linkedin-link">Open</a></li>
                                    </ul>
                                </div>
                                <div className="stats">
                                    <div className="stat-box"><h2>1<sup>+</sup></h2><p>Years<br />of Experience</p></div>
                                    <div className="stat-box"><h2>20<sup>+</sup></h2><p>Project<br />Completed</p></div>
                                    <div className="stat-box"><h2>8<sup>+</sup></h2><p>Powerful<br />Skills</p></div>
                                    <div className="stat-box"><h2>5<sup>+</sup></h2><p>Certificates<br />Won</p></div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
