import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Container, Row } from 'react-bootstrap';
import { RiMailSendFill } from "react-icons/ri";
import RobotModel from './robotmodel/RobotModel';
import { toast } from "react-toastify";
import { IoMdMail } from "react-icons/io";
import { IoCall, IoTimeSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import './contact.css';

function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const sectionRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_q0900ea';
    const templateID = 'template_tsdaoop';
    const publicKey = 'tNlYP4J_5y5wqhlRF';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'aaris pathan',
      message: message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        toast.success('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending message', error);
        toast.error('Failed to send message. Please try again.');
      });
  };

  return (
    <section className='contact-section' id='contact' ref={sectionRef}>
      <Container>
        <Row className="align-items-center">
          <Col>
            <div className='contact-title'>
              <h1>Contact</h1>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={6} md={12} sm={12}>
            <RobotModel />
          </Col>
          <Col lg={6} md={12} sm={12}>
            <form className='contact-form' onSubmit={handleSubmit} method="POST" >
              <div className="contact-form-title">
                <h3>Get in Touch</h3>
              </div>
              <div className="inputGroup">
                <input
                  autoComplete="off"
                  required
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="inputGroup">
                <input
                  autoComplete="off"
                  required
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name">Name</label>
              </div>

              <div className="inputGroup">
                <textarea
                  autoComplete="off"
                  required
                  name="message"
                  id="message"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <label htmlFor="message">Message</label>
              </div>
              <button className='button' type="submit">
                <span>Send Message <RiMailSendFill className='icon' /></span>
              </button>
            </form>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="stats">
              <div className="stat-box">
                <IoMdMail className="contact-icon" />
                <h2>Email</h2>
                <p>
                  aarispathan15@gmail.com<br />
                  <span>Send me an email anytime</span>
                </p>
              </div>
              <div className="stat-box">
                <IoCall className="contact-icon" />
                <h2>Phone</h2>
                <p>
                  +91 90549 63110<br />
                  <span>Call me for urgent matters</span>
                </p>
              </div>
              <div className="stat-box">
                <FaLocationDot className="contact-icon" />
                <h2>Location</h2>
                <p>
                  Ahmedabad, Gujarat<br />
                  <span>Available for local meetings</span>
                </p>
              </div>
              <div className="stat-box">
                <IoTimeSharp className="contact-icon" />
                <h2>Availability</h2>
                <p>
                  Within 24 hours<br />
                  <span>Send me an email anytime</span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section >
  );
}

export default Contact;