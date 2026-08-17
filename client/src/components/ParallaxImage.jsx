import { useEffect, useRef, useState } from "react";

function ParallaxImage() {
    const sectionRef = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
            const translateY = progress * 120 - 40;
            setOffset(translateY);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="parallax-image-section" ref={sectionRef}>
            <div className="parallax-wrapper">
                <div className="parallax-layer" style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.15)` }}>
                    <img src="/ParallaxImage.png" alt="Decorative parallax background" />
                </div>
            </div>
        </section>
    );
}

export default ParallaxImage;