import { useEffect, useRef } from "react";
import "./Cursor.css";

function Cursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;

        const moveMouse = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener("mousemove", moveMouse);

        const animate = () => {
            currentX += (mouseX - currentX) * 0.12;
            currentY += (mouseY - currentY) * 0.12;

            if (cursorRef.current) {
                cursorRef.current.style.left = `${currentX}px`;
                cursorRef.current.style.top = `${currentY}px`;
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", moveMouse);
        };
    }, []);

    return <div ref={cursorRef} className="cursor"></div>;
}

export default Cursor;