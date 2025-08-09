import "./TopMenu.css"

import React, {useEffect, useRef} from "react";
import {Link, NavLink} from 'react-router-dom'

import logoImg from "/img/logo/logo.png";
import gsap from "gsap";

function TopMenu() {

    const logoWrapper = useRef(null);
    const logoSkewAnim = useRef(null);

    const handleMouseEnter = () => {
        // Проверяем, что анимация еще не создана
        if (!logoSkewAnim.current) {
            logoSkewAnim.current = gsap.to(logoWrapper.current, {
                duration: 2,
                skewY: 10,
                scale: 1.01,
                repeat: -1,
                yoyo: true,
                ease: "power1.inOut",
            });
        } else {
            logoSkewAnim.current.resume();
        }
    };
    const handleMouseLeave = () => {
        logoSkewAnim.current.pause();
    };

    return (
        <nav className="top-menu">

            <div className="top-menu__left">
                <div className="logo-container"
                     ref={logoWrapper}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                >
                    <NavLink to="/">
                        <img className="logo" src={logoImg} alt="logo"/>
                    </NavLink>
                </div>

                <div className="description-container">
                    <p className="description-text">
                        Наши рецепты. Наша история. От нашей кухни к вашей
                    </p>
                </div>
            </div>

            <div className="top-menu__right">
                <ul className="top-menu-list">
                    <NavLink to="/toc" className="top-menu-list__item">
                        Оглавление
                    </NavLink>
                    <NavLink to="/" className="top-menu-list__item">
                        О нас
                    </NavLink>
                    <NavLink to="/" className="top-menu-list__item">
                        Контакты
                    </NavLink>
                </ul>
            </div>

        </nav>
    );
}

export default TopMenu;