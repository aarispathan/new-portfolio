import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollStory() {
    const root = useRef(null);

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

            const sections = gsap.utils.toArray(".panel");

            if (!sections.length) return;

            gsap.timeline({
                scrollTrigger: {
                    trigger: root.current,
                    start: "top top",
                    end: "+=300%",
                    scrub: 1,
                    pin: true,
                }
            });

        }, root);

        return () => ctx.revert();

    }, []);

    return <div ref={root} className="scroll-story-wrapper"></div>;
}