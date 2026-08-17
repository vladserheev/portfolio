import { useEffect } from "react";
import Lenis from "lenis";

function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
        });

        const handleHashClick = (event) => {
            const anchor = event.target.closest('a[href^="#"]');
            if (!anchor) return;

            const targetId = anchor.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            event.preventDefault();
            lenis.scrollTo(target, { offset: -90 });
        };

        document.addEventListener('click', handleHashClick);

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            document.removeEventListener('click', handleHashClick);
            lenis.destroy();
        };
    }, []);

    return null;
}

export default SmoothScroll;