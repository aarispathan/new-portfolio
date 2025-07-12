import React, { useEffect, useRef, useState } from "react";
import "./preloader.css";

const Preloader = () => {
    const [progress, setProgress] = useState(0);
    const [showWelcome, setShowWelcome] = useState(false);
    const [hide, setHide] = useState(false);
    const [finished, setFinished] = useState(false);

    const track1 = useRef(null);
    const track10 = useRef(null);
    const track100 = useRef(null);
    const wrapper = useRef(null);

    useEffect(() => {
        document.body.classList.add("loading");
        return () => document.body.classList.remove("loading");
    }, []);

    useEffect(() => {
        let loadedImages = 0;
        const totalImages = document.images.length;

        const docProgress = () =>
            document.readyState === "loading"
                ? 10
                : document.readyState === "interactive"
                    ? 50
                    : 100;

        const resProgress = () => {
            const res = performance.getEntriesByType("resource");
            if (!res.length) return 100;
            const done = res.filter((r) => r.responseEnd).length;
            return Math.round((done / res.length) * 100);
        };

        const imgProgress = () =>
            totalImages === 0
                ? 100
                : Math.round((loadedImages / totalImages) * 100);

        Array.from(document.images).forEach((img) => {
            const inc = () => (loadedImages += 1);
            if (img.complete) inc();
            else {
                img.addEventListener("load", inc);
                img.addEventListener("error", inc);
            }
        });

        let targetProgress = 0;

        const int = setInterval(() => {
            const estimated = Math.round(
                docProgress() * 0.3 + resProgress() * 0.4 + imgProgress() * 0.3
            );

            if (targetProgress < estimated || targetProgress < 120) {
                targetProgress += 1;
                setProgress(targetProgress);
            }
        }, 16);

        return () => clearInterval(int);
    }, []);

    useEffect(() => {
        const ones = progress * -2;
        const tens = Math.floor(progress / 10) * -2;
        const hundreds = Math.floor(progress / 100) * -2;

        track1.current &&
            (track1.current.style.transform = `translateY(${ones}ch)`);
        track10.current &&
            (track10.current.style.transform = `translateY(${tens}ch)`);
        track100.current &&
            (track100.current.style.transform = `translateY(${hundreds}ch)`);
    }, [progress]);

    useEffect(() => {
        if (progress < 100) return;

        setFinished(true);
        setShowWelcome(true);

        const p = wrapper.current?.querySelector("p");
        p && (p.style.transform = "scale(1.2)");

        const spans = wrapper.current?.querySelectorAll(".welcome-track");
        const anims = [
            "trackClip",
            "trackClip",
            "track100Clip",
            "track10Clip",
            "track1Clip",
            "trackClip",
            "trackClip",
        ];

        spans?.forEach((span, i) => {
            setTimeout(() => {
                const yNow =
                    parseFloat(span.style.transform.replace(/[^\d.-]/g, "")) || 0;
                span.style.transform = `translateY(${yNow - 2}ch)`;

                setTimeout(() => {
                    span.style.transform = `translateY(${yNow - 4}ch)`;
                    span.style.animation = `${anims[i]} 1.8s cubic-bezier(.65,.05,0,1) forwards`;
                }, 1200);
            }, i * 50);
        });

        setTimeout(() => {
            wrapper.current &&
                (wrapper.current.style.animation =
                    "preloaderClip 1.5s cubic-bezier(.65,.05,0,1.36) forwards");
        }, 800);

        setTimeout(() => {
            document.body.classList.remove("loading");
            setHide(true);
        }, 4800);
    }, [progress]);

    if (hide) return null;

    const show = showWelcome ? "show" : "";

    return (
        <div id="preloader" ref={wrapper}>
            <p>
                {finished ? (
                    <>
                        <span className={`welcome-track ${show}`}> w </span>
                        <span className={`welcome-track ${show}`}> e </span>
                        <span className={`welcome-track ${show}`}> l </span>
                        <span className={`welcome-track ${show}`}> c </span>
                        <span className={`welcome-track ${show}`}> o </span>
                        <span className={`welcome-track ${show}`}> m </span>
                        <span className={`welcome-track ${show}`}> e </span>
                    </>
                ) : (
                    <span className="loader-percent">{`${progress}%`}</span>
                )}
            </p>
        </div>
    );
};

export default Preloader;
