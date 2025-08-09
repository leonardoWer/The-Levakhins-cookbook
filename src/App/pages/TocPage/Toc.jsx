import "./Toc.css"

import {useState, useEffect, useRef} from "react";

import gsap from "gsap";
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(SplitText);

import TocItem from "./components/TocItem/TocItem.jsx";
import {recipeGroupsData, totalRecipesCount} from "s/data/recipesHandler.js";
import RecipeTile from "s/App/pages/TocPage/components/RecipeTile/RecipeTile.jsx";
import PageSlider from "s/components/PageSlider/PageSlider.jsx";

function Toc() {

    const logoImgWrapper = useRef(null);
    const logoImgText = useRef(null);

    const [recipeImgSrc, setRecipeImgSrc] = useState('');
    const [recipeTagsData, setRecipeTagsData] = useState([]);
    const handleMouseEnter = (imgSrc, tagsData) => {
        setRecipeImgSrc(imgSrc);
        setRecipeTagsData(tagsData);
    };

    useEffect(() => {
        // Создаем анимацию качания
        gsap.to(logoImgWrapper.current, {
            duration: 2,
            skewY: 10,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        document.fonts.ready.then(() => {
            const splitText = new SplitText(logoImgText.current, {type: "words"});
            gsap.to(splitText.words, {
                yPercent: -10,
                stagger: 0.2,
                repeat: -1,
                repeatDelay: 1,
                yoyo: true,
                ease: "power2.out",
            })
        })

    }, []); // Пустой массив зависимостей - эффект выполнится только при монтировании

    return (
        <section id="tocSection">
            <div className="toc-content-container">

                <div className="toc__left">
                    {recipeGroupsData.map((recipeGroup, groupIndex) => (
                        <TocItem
                            key={groupIndex}
                            titleNumber={groupIndex + 1}
                            title={recipeGroup.title}
                            itemsData={recipeGroup.recipes}
                            onRecipeMouseEnter={handleMouseEnter}
                        />
                    ))}
                </div>


                <div className="toc__right">
                    <h2 className="toc-right__title">Оглавление</h2>

                    <div className="toc-right__img-container">
                        <div className="img-container__content">
                            <div className="img-container-content__logo-img-wrapper" ref={logoImgWrapper}>
                                <img src="img/logo/logo.png" alt="half-book"
                                     className="img-container-content__logo-img"/>
                            </div>
                            <h4 className="img-container-content__text" ref={logoImgText}>Наведите мышь<br/>на нужный
                                рецепт</h4>
                        </div>

                        <div className="img-container__recipe-img-container">
                            {recipeImgSrc ?
                                <RecipeTile imgSrc={recipeImgSrc} tagsData={recipeTagsData}/> : ""
                            }
                        </div>

                    </div>

                    <PageSlider currentPage={0} totalPages={totalRecipesCount} isTocPage={true}/>

                </div>

            </div>
        </section>
    )
}

export default Toc;