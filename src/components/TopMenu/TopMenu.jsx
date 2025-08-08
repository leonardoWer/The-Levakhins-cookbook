import "./TopMenu.css"

import React from "react";
import { Link, NavLink } from 'react-router-dom'

import bookImg from "/img/book.png";

function TopMenu() {
    return (
        <nav className="top-menu">

            <div className="top-menu__left">
                <div className="logo-container">
                    <NavLink to="/">
                        <img className="logo" src={bookImg} alt="logo"/>
                    </NavLink>
                </div>

                <div className="description-container">
                    <p className="description-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, cupiditate?
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