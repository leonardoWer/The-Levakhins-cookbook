import "./Toc.css"

import TocItem from "./components/TocItem/TocItem.jsx";

import {recipeGroupsData} from "s/data/recipesHandler.js";

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

                    <div className="toc-right__img-container">
                        <img src="img/book.png" alt=""/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Toc;