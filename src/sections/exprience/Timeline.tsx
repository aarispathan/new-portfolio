import React, {
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
    type ReactNode,
} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./timeline.css";

interface TimelineEntry {
    title: string;
    content: ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    // Scroll hook - must be declared at top level
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    // Transforms - also must be top level
    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    // ResizeObserver to measure wrapper height
    useLayoutEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;

        const updateHeight = () => {
            const rect = el.getBoundingClientRect();
            setHeight(rect.height);
        };

        updateHeight(); // initial

        const resizeObserver = new ResizeObserver(updateHeight);
        resizeObserver.observe(el);

        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div className="timeline-container" ref={containerRef}>
            <div className="exprience-title">
                <h1>Experience</h1>
            </div>

            <div className="timeline-wrapper" ref={wrapperRef}>
                {data.map((item, index) => {
                    const isEven = index % 2 !== 0;
                    return (
                        <div key={index} className="timeline-entry">
                            <div className={`timeline-number ${isEven ? "right-num" : ""}`}>
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <div className="timeline-date">
                                <div className="timeline-dot" />
                            </div>

                            <div className="timeline-content-wrapper">
                                <h3 className="timeline-date-label mobile">{item.title}</h3>
                                {item.content}
                            </div>
                        </div>
                    );
                })}

                <div style={{ height: `${height}px` }} className="timeline-progress-bg">
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="timeline-progress-fill"
                    />
                </div>
            </div>
        </div>
    );
};
