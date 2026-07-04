import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./Testimonials.css";

function Testimonials() {
    const testimonials = [
        {
            name: "Rahul Sharma",
            company: "E-Commerce Store Owner",
            review:
                "Aaris built a modern and responsive website that significantly improved our online presence. His attention to detail and UI skills are exceptional."
        },

        {
            name: "Priya Patel",
            company: "Startup Founder",
            review:
                "Very professional developer. Clean code, fast delivery and excellent communication throughout the project."
        },

        {
            name: "Mohit Verma",
            company: "Digital Marketing Agency",
            review:
                "Our website performance and user experience improved drastically. Highly recommended for React projects."
        },

        {
            name: "Sneha Shah",
            company: "UI/UX Consultant",
            review:
                "Creative frontend developer with strong design sense. Delivered exactly what we expected."
        }
    ];

    return (
        <section className="testimonials-section" id="testimonials">

            <Container>

                <div className="section-title">
                    <span>TESTIMONIALS</span>

                    <h2>
                        Client <span>Feedback</span>
                    </h2>
                </div>

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>

                            <motion.div
                                className="testimonial-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >

                                <FaQuoteLeft className="quote-icon" />

                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>

                                <p className="review">
                                    {item.review}
                                </p>

                                <div className="client-info">
                                    <h4>{item.name}</h4>
                                    <span>{item.company}</span>
                                </div>

                            </motion.div>

                        </SwiperSlide>
                    ))}
                </Swiper>

            </Container>

        </section>
    );
}

export default Testimonials;