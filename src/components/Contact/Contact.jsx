import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import { Container, Row, Col, Form } from "react-bootstrap";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaEnvelope
} from "react-icons/fa";

import "./Contact.css";

function Contact() {

    const sectionRef = useRef(null);
    const formRef = useRef(null);

    const [loading, setLoading] = useState(false);

    // scroll animation
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center center"]
    });

    const yTitle = useTransform(scrollYProgress, [0, 1], [80, 0]);
    const opacityTitle = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const yLeft = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const yRight = useTransform(scrollYProgress, [0, 1], [120, 0]);

    const smoothTitleY = useSpring(yTitle, { stiffness: 80, damping: 18 });

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "service_q0900ea",
                "template_tsdaoop",
                formRef.current,
                "tNlYP4J_5y5wqhlRF"
            )
            .then(() => {
                setLoading(false);
                Swal.fire({
                    icon: "success",
                    title: "Message Sent 🚀",
                    text: "Thank you for contacting me!",
                    confirmButtonColor: "#ff7b00"
                });
                formRef.current.reset();
            })
            .catch(() => {
                setLoading(false);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Failed to send message.",
                    confirmButtonColor: "#ff7b00"
                });
            });
    };

    return (
        <section className="contact-section" id="contact" ref={sectionRef}>

            <Container>

                {/* TITLE */}
                <motion.div
                    className="section-title"
                    style={{
                        y: smoothTitleY,
                        opacity: opacityTitle
                    }}
                >
                    <span>GET IN TOUCH</span>
                    <h2>Contact <span>Me</span></h2>
                </motion.div>

                <Row className="align-items-center g-5">

                    {/* LEFT */}
                    <Col lg={5}>
                        <motion.div
                            className="contact-info"
                            style={{ y: yLeft }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <h3>Let's Work Together 🚀</h3>
                            <p>
                                I'm open to freelance work, collaborations and creative projects.
                            </p>

                            <motion.div
                                className="social-links"
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: {},
                                    show: {
                                        transition: {
                                            staggerChildren: 0.15
                                        }
                                    }
                                }}
                            >
                                {[
                                    FaGithub,
                                    FaLinkedinIn,
                                    FaInstagram,
                                    FaEnvelope
                                ].map((Icon, i) => (
                                    <motion.a
                                        key={i}
                                        href="#"
                                        variants={{
                                            hidden: { opacity: 0, scale: 0 },
                                            show: { opacity: 1, scale: 1 }
                                        }}
                                        whileHover={{
                                            scale: 1.2,
                                            rotate: 10
                                        }}
                                    >
                                        <Icon />
                                    </motion.a>
                                ))}
                            </motion.div>

                        </motion.div>
                    </Col>

                    {/* RIGHT */}
                    <Col lg={7}>
                        <motion.div
                            className="contact-form-wrapper"
                            style={{ y: yRight }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <Form ref={formRef} onSubmit={sendEmail}>

                                <Form.Group className="mb-4">
                                    <Form.Control name="from_name" placeholder="Your Name" required />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Control name="from_email" placeholder="Your Email" required />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Control name="subject" placeholder="Subject" required />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Control as="textarea" rows={6} name="message" placeholder="Message" required />
                                </Form.Group>

                                <motion.button
                                    type="submit"
                                    className="send-btn"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    disabled={loading}
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </motion.button>

                            </Form>
                        </motion.div>
                    </Col>

                </Row>

            </Container>

        </section>
    );
}

export default Contact;