import "./HomePage.css";

import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Home from "./sections/Home/Home.jsx";
import About from "./sections/About/About.jsx";
import People from "./sections/People/People.jsx";

function HomePage() {
    const horizontalScrollWrapper = useRef(null);
    const horizontalScrollContainer = useRef(null);
    const spacerWrapper = useRef(null);

    useEffect(() => {
        if (horizontalScrollContainer.current && horizontalScrollWrapper.current) {

            function getScrollAmount() {
                const totalWidth = horizontalScrollContainer.current.offsetWidth;
                return -(totalWidth - window.innerWidth); // Вся ширина минус разрешение экрана
            }

            const spacer = document.createElement("div");
            spacer.style.height = `${getScrollAmount() * -1}px`;
            spacerWrapper.current.parentNode.insertBefore(spacer, spacerWrapper.current.nextSibling);

            const hs = gsap.to(horizontalScrollContainer.current, {
                x: () => getScrollAmount(),
                ease: "none",
                duration: 2,
            });

            ScrollTrigger.create({
                trigger: horizontalScrollWrapper.current,
                start: "top top",
                end: `+=${getScrollAmount() * -1}`,
                scrub: 1,
                invalidateOnRefresh: true,
                animation: hs,
                pin: true,
                pinSpacing: false,
            })

            // Clean up function (важно!)
            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }
    }, []);

    return (
        <div>
            <div className="horizontal-scroll-container-wrapper" ref={horizontalScrollWrapper}>
                <div className="horizontal-scroll-container" ref={horizontalScrollContainer}>
                    <Home/>
                    <About/>
                </div>
            </div>

            <div className="spacer-wrapper" ref={spacerWrapper}></div>

            <People/>

        </div>
    )
}

export default HomePage;