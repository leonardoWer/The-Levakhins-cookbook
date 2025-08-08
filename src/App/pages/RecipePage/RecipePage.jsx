import "./RecipePage.css"

import {useParams} from "react-router-dom";

import {recipeById} from "s/data/recipesHandler.js";

import StepItem from "./components/StepItem/StepItem.jsx";

function RecipePage() {

    const {id} = useParams();
    const recipe = recipeById.get(Number(id));

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
                <div className="recipe__right__img-container">
                    <img src={recipe.img ?? null} alt={recipe.title} />
                </div>
            </div>

        </div>
    )
}

export default RecipePage;