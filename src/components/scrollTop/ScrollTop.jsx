import React, { useEffect, useState } from 'react';
import './scrolltop.css';
import { GoArrowUp } from 'react-icons/go';

function ScrollTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`scroll-top ${isVisible ? 'visible' : ''}`}
            onClick={handleClick}
        >
            <GoArrowUp className="svgIcon" />
        </button>
    );
}

export default ScrollTop;
