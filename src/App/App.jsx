import './App.css'

import {useEffect, useRef} from "react";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import TopMenu from 's/components/TopMenu/TopMenu.jsx'
import Home from "./sections/Home/Home.jsx"
import About from "./sections/About/About.jsx"
import People from "./sections/People/People.jsx"

function App() {

    const horizontalScrollWrapper = useRef(null);
    const horizontalScrollContainer = useRef(null);

    useEffect(() => {
        if (horizontalScrollContainer.current) {

            function getScrollAmount() {
                const totalWidth = horizontalScrollContainer.current.offsetWidth;
                return -(totalWidth - window.innerWidth); // Вся ширина минус разрешение экрана
            }

            const hs = gsap.to(horizontalScrollContainer.current, {
                x: () => getScrollAmount(),
                ease: "none",
                duration: 3,
            });

            ScrollTrigger.create({
                trigger: horizontalScrollWrapper.current,
                pin: true,
                start: "top top",
                end: `+=${getScrollAmount() * -1}`,
                scrub: 1,
                invalidateOnRefresh: true,
                animation: hs
            })

            // Clean up function (важно!)
            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }
    }, []);

    return (
    <>
        <TopMenu />

        <div className="horizontal-scroll-container-wrapper" ref={horizontalScrollWrapper}>
            <div className="horizontal-scroll-container" ref={horizontalScrollContainer}>
                <Home />
                <About />
            </div>
        </div>

        <People />

    </>
    )
}

export default App
