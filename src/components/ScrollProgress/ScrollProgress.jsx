import { useEffect, useState } from "react";

function ScrollProgress() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const total =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const current =
                (window.scrollY / total) * 100;

            setScroll(current);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: `${scroll}%`,
                height: "4px",
                zIndex: 9999,
                background:
                    "linear-gradient(90deg,#ff7b00,#ffb347)"
            }}
        />
    );
}

export default ScrollProgress;