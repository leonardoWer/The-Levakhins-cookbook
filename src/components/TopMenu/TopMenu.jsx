import "./TopMenu.css"

import React, {useEffect, useRef, useState} from "react";
import {Link, NavLink} from 'react-router-dom'

import logoImg from "/img/logo/logo.png";
import gsap from "gsap";

function TopMenu() {

    // Кнопка меню
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Анимация лого
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
        <div className="top-menu-container">
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
                        <p>
                            Наши рецепты. Наша история. От нашей кухни к вашей
                        </p>
                    </div>

                </div>

                <div className="top-menu__right">
                    <ul className="top-menu-list">
                        <Navigation className={"top-menu-list__item"}/>
                    </ul>
                </div>

                {/* Мобильное меню */}
                <div className={`mobile-menu-button ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                    <div className="mobile-menu-button__line"></div>
                    <div className="mobile-menu-button__line"></div>
                </div>

            </nav>

            {/* Полноэкранное меню */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-menu-list">
                    <Navigation className={"mobile-menu-list__item"} onClick={toggleMobileMenu}/>
                    <li className="mobile-menu-list__description">
                        Наши рецепты.<br/>Наша история.<br/>От нашей кухни к вашей
                    </li>

                </ul>


            </div>
        </div>

    );
}

function Navigation({className, onClick}) {

    const onClickHandler = onClick ?? "";
    return (
        <>
            <NavLink to="/toc" className={className} onClick={onClickHandler}>
                Оглавление
            </NavLink>
            <NavLink to="/" className={className} onClick={onClickHandler}>
                О нас
            </NavLink>
            <NavLink to="/" className={className} onClick={onClickHandler}>
                Контакты
            </NavLink>
        </>
    )
}

export default TopMenu;