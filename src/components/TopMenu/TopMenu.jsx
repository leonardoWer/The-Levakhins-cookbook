import "./TopMenu.css"

import React from "react";
// import { Link } from 'react-router-dom'

function TopMenu() {
    return (
        <nav className="top-menu">

            <div className="top-menu__left">
                <div className="logo-container">
                    <img className="logo" src="img/book.png" alt="logo"/>
                </div>

                <div className="description-container">
                    <p className="description-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, cupiditate?
                    </p>
                </div>
            </div>

            <div className="top-menu__right">
                <ul className="top-menu-list">
                    <li className="top-menu-list__item">
                        Оглавление
                    </li>
                    <li className="top-menu-list__item">
                        О нас
                    </li>
                    <li className="top-menu-list__item">
                        Контакты
                    </li>
                </ul>
            </div>

        </nav>
    );
}

export default TopMenu;