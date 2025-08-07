import React from 'react';
import {Link} from 'react-router-dom';

import gsap from 'gsap';
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

function BaseLink({title, onClick, className}) {

    let linkProps = {
        className: className ? className : '',
    };

    if (onClick && typeof onClick === 'object') {

        const handlePageScroll = (event) => {
            event.preventDefault(); // Отменяем стандартное поведение

            const targetId = onClick.href;
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                gsap.to(window, {
                    duration: 0.8,
                    ease: "power3.inOut",
                    scrollTo: {
                        y: targetElement,
                    },
                });
            } else {
                console.warn("Can't find element with id: " + targetId);
            }
        }

        if (onClick.link) {
            // Внешняя ссылка
            linkProps.href = onClick.link;
            linkProps.target = onClick.target || "_blank";
            linkProps.rel = onClick.rel || "noopener noreferrer";
            if (onClick.title) {
                linkProps.title = onClick.title;
            }
        } else if (onClick && typeof onClick === 'object' && onClick.href) {
            linkProps.href = `#${onClick.href}`;
            linkProps.onClick = handlePageScroll;
        }
    } else {
        console.warn("onClick must be an object!")
    }

    return (
        <a {...linkProps}>
            {title}
        </a>
    );
}

export default BaseLink;