import "./Toc.css"

import TocItem from "./components/TocItem/TocItem.jsx";

import {recipeGroupsData, totalRecipesCount} from "s/data/recipesHandler.js";
import PageSlider from "s/components/PageSlider/PageSlider.jsx";

function Toc() {



    return (
        <section id="tocSection">
            <div className="toc-content-container">

                <div className="toc__left">
                    {recipeGroupsData.map( (recipeGroup, groupIndex) => (
                        <TocItem
                            key={groupIndex}
                            titleNumber={groupIndex + 1}
                            title={recipeGroup.title}
                            itemsData={recipeGroup.recipes}
                        />
                        ))}
                </div>


                <div className="toc__right">
                    <h2 className="toc-right__title">Оглавление</h2>

                    <div className="toc-right__img-container"></div>

                    <PageSlider currentPage={0} totalPages={totalRecipesCount} isTocPage={true} />
                </div>

            </div>
        </section>
    )
}

export default Toc;