import "./RecipeTile.css"
import {useEffect, useRef} from "react";
import gsap from "gsap";

function RecipeTile({imgSrc, tagsData}) {

    const recipeImg = useRef(null);
    useEffect(() => {
        if (recipeImg.current) {
            gsap.fromTo(recipeImg.current, {
                    skewY: 45,
                    yPercent: 100,
                    ease: "power1.out",
                }, {
                    skewY: 0,
                    yPercent: 0,
                    duration: 0.5
                }
            );
        }
    }, [imgSrc]); // Зависимость от imageSrc

    const tagItemsRefs = useRef([]);
    // Анимация появления элементов списка
    useEffect(() => {
        tagItemsRefs.current.forEach((item, index) => {
            if (item) {
                gsap.fromTo(
                    item,
                    { // Начальные значения
                        opacity: 0,
                        yPercent: 100,
                    },
                    { // Конечные значения
                        opacity: 1,
                        yPercent: 0,
                        duration: 0.5,
                        ease: "power2.out",
                        delay: index * 0.12
                    }
                );
            }
        });
    }, [tagsData]);



    return (
        <div className="recipe-tile">
            <ul className="recipe-tile__tags-list">
                {tagsData.map((item, i) => (
                    <li key={i}
                        className="tag-item"
                        ref={el => (tagItemsRefs.current[i] = el)}
                    >
                        {item}
                    </li>
                ))}
            </ul>

            <div className="recipe-tile__img-container">
                <img src={imgSrc} alt="recipe-photo" className="recipe-tile__img" ref={recipeImg}></img>
            </div>

        </div>
    )
}

export default RecipeTile;