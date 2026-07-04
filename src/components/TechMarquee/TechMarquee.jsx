import "./TechMarquee.css";
import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useMotionValue
} from "framer-motion";
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaGithub
} from "react-icons/fa";
import {
    SiJavascript,
    SiFirebase,
    SiTailwindcss,
    SiVite
} from "react-icons/si";

function TechMarquee() {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const rawX = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const rawY = useTransform(scrollYProgress, [0, 1], [0, 20]);

    const x = useSpring(rawX, { stiffness: 60, damping: 25 });
    const y = useSpring(rawY, { stiffness: 60, damping: 25 });

    const mx = useMotionValue(0);
    const my = useMotionValue(0);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const xPos = (e.clientX - rect.left) / rect.width - 0.5;
        const yPos = (e.clientY - rect.top) / rect.height - 0.5;

        mx.set(xPos);
        my.set(yPos);
    };

    return (
        <section className="tech-marquee" ref={ref} onMouseMove={handleMouseMove}>

            <motion.div
                className="tech-track"
                style={{
                    x,
                    y
                }}
            >

                <div className="tech-item"><FaReact /> React</div>
                <div className="tech-item"><FaHtml5 /> HTML5</div>
                <div className="tech-item"><FaCss3Alt /> CSS3</div>
                <div className="tech-item"><SiJavascript /> JavaScript</div>
                <div className="tech-item"><FaBootstrap /> Bootstrap</div>
                <div className="tech-item"><SiTailwindcss /> Tailwind</div>
                <div className="tech-item"><SiFirebase /> Firebase</div>
                <div className="tech-item"><FaGithub /> GitHub</div>
                <div className="tech-item"><SiVite /> Vite</div>

                <div className="tech-item"><FaReact /> React</div>
                <div className="tech-item"><FaHtml5 /> HTML5</div>
                <div className="tech-item"><FaCss3Alt /> CSS3</div>
                <div className="tech-item"><SiJavascript /> JavaScript</div>
                <div className="tech-item"><FaBootstrap /> Bootstrap</div>
                <div className="tech-item"><SiTailwindcss /> Tailwind</div>
                <div className="tech-item"><SiFirebase /> Firebase</div>
                <div className="tech-item"><FaGithub /> GitHub</div>
                <div className="tech-item"><SiVite /> Vite</div>

            </motion.div>

        </section>
    );
}

export default TechMarquee;