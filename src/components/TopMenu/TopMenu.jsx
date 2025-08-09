import "./TopMenu.css"

import React from "react";
import { Link, NavLink } from 'react-router-dom'

import logoImg from "/img/logo/logo.png";

function TopMenu() {
    return (
        <nav className="top-menu">

            <div className="top-menu__left">
                <div className="logo-container">
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