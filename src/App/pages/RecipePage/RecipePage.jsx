import "./RecipePage.css"

import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";

import {recipeById, totalRecipesCount} from "s/data/recipesHandler.js";

import StepItem from "./components/StepItem/StepItem.jsx";
import RecipeTile from "s/App/pages/TocPage/components/RecipeTile/RecipeTile.jsx";
import PageSlider from "s/components/PageSlider/PageSlider.jsx";

function RecipePage() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchedRecipe = recipeById.get(Number(id));

        if (!fetchedRecipe) {
            navigate("/404", { replace: true });
        } else {
            setRecipe(fetchedRecipe);
        }
    }, [id, navigate]);

    // Если recipe все еще null, отображаем сообщение о загрузке или ничего
    if (!recipe) {
        return <img src="img/logo/logo.png" alt="loading..."/>;
    }

    return (
        <div className="recipe-content-container">

            <div className="recipe__left">

                <div className="recipe-title-container border-bottom-container">
                    <div className="recipe-title-wrapper">
                        <h2 className="recipe-title">{recipe.title}</h2>
                        <i className="circle-icon"></i>
                        <span className="title-label">{recipe.title}</span>
                    </div>

                    <p className="info-text">
                        {recipe.info ? recipe.info : null}
                    </p>
                </div>

                <div className="ingredients-container border-bottom-container">
                    <div className="topic-title-text">Ингридиенты</div>

                    <ul className="ingredients-container__list">
                        {recipe.ingredients.map((item, index) => (
                            <li className="ingredients-item" key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="instructions-container">
                    <div className="topic-title-text">Инструкции</div>

                    {recipe.steps.map((step, index) => (
                        <StepItem key={index} step={step} />
                    ))}

                </div>

            </div>


            <div className="recipe__right">

                <RecipeTile imgSrc={recipe.img} tagsData={recipe.tags} />

                <PageSlider currentPage={Number(id)} totalPages={totalRecipesCount} />
            </div>

        </div>
    )
}

export default RecipePage;