import "./RectangleLink.css"

import {useEffect, useRef} from "react";

import gsap from "gsap";

import BaseLink from "s/components/Links/Link.jsx"


function RectangleLink({title, ...linkProps}) {

    const linkRef = useRef(null);
    const textRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const link = linkRef.current;
        const text = textRef.current;
        const bg = bgRef.current;

        if (!link || !bg) {
            console.warn("!link or !bg");
            return;
        }

        // Настройка анимации GSAP
        gsap.set(bg, { bottom: "-100%" });

        const handleMouseEnter = () => {
            gsap.to(bg, {
                bottom: 0,
                duration: 0.5,
                ease: "power3.out",
            });
            gsap.to(text, {
                yPercent: -100
            })
        };

        const handleMouseLeave = () => {
            gsap.to(bg, {
                bottom: "-100%",
                duration: 0.5,
                ease: "power3.out",
            });
            gsap.to(text, {
                yPercent: 0
            })
        };

        link.addEventListener("mouseenter", handleMouseEnter);
        link.addEventListener("mouseleave", handleMouseLeave);

        // Функция очистки при размонтировании компонента (важно!)
        return () => {
            link.removeEventListener("mouseenter", handleMouseEnter);
            link.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <BaseLink {...linkProps} className="rectangle-link" ref={linkRef}>
            <span className="rectangle-link__text" ref={textRef}>{title}</span>
            <div className="rectangle-link__bg" ref={bgRef}>
                {title}
            </div>
        </BaseLink>
    )
}

export default RectangleLink;