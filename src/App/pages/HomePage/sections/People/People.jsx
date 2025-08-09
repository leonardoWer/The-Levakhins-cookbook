import "./People.css"

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import PersonCard from "./components/PersonCard/PersonCard.jsx";

function People() {

    const photoPath = "img/persons/"

    const [personsData, setPersonsData] = useState([
        {
            id: 1,
            title: "Левахин Лев",
            role: "Муж",
            description: "Готовка для меня – это способ проявить заботу о себе и близких. " +
                "В нашей семье я часто беру на себя роль шеф-повара и готовлю самые разные и интересные блюда. " +
                "На сайте я хочу поделиться нашими семейными рецептами, которые делают нашу жизнь вкуснее",
            img: photoPath + "lev.png",
        },
        {
            id: 2,
            title: "Дарья Раева",
            role: "Жена",
            description: "Готовка для меня - это способ проявить заботу. " +
                "Больше всего мне нравится работать с тестом, создавать сладости, украшать блюда - " +
                "превращать простые рецепты в настоящие произведения искусства",
            img: photoPath + "daria.png",
        },
    ]);

    // Ссылки
    const parentRef = useRef(null);
    const containerRef = useRef(null);
    const cardRefs = useRef([]); // Ссылки на отдельные карточки

    useEffect(() => {
        // Создаем ScrollTrigger только после монтирования компонента
        if (containerRef.current && parentRef.current && personsData.length > 0) {
            // Инициализируем refs
            cardRefs.current = personsData.map((_, i) => cardRefs.current[i] || useRef());

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: parentRef.current,
                    start: "top top",
                    end: "+=2800",
                    scrub: 1.8,
                    pin: true,
                    invalidateOnRefresh: true,
                },
            })

            // Анимация появления карточек
            cardRefs.current.forEach((cardRef, i) => {
                tl.fromTo(
                    cardRef.current,
                    { y: "100%"},
                    { y: "0%", duration: 0.5, ease: "power2.out" },
                    i * 0.5)

                if (i < personsData.length - 1) {
                    tl.to(cardRef.current, {
                            opacity: 0,
                            duration: 0.3,
                            ease: "power1.inOut"
                        },
                        i * 0.5 + 0.5 // Начинаем исчезновение после появления
                    );
                }

            });

            return () => {
                // Очистка ScrollTriggers при размонтировании компонента
                tl.kill();
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }
    }, [personsData]); // Зависимость от personData

    return (
        <section id="peopleSection">
            <div className="people-content-container" ref={parentRef}>

                <img className="people-bg" src="img/book.png" alt="book"/>

                <div className="person-cards-container" ref={containerRef}>
                    {personsData.map((person, index) => (
                        <div className="person-card-wrapper" key={person.id} ref={el => cardRefs.current[index] = { current: el }}>
                            <PersonCard {...person} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default People;