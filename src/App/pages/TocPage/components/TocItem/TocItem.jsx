import "./TocItem.css";

import { Link } from 'react-router-dom';

function TocItem({titleNumber, title, itemsData}) {
    return (
        <div className="toc-item">

            <div className="toc-item__number-container">
                <span className="toc-item__number">0{titleNumber}</span>
            </div>


            <div className="toc-item__content-container">
                <h4 className="toc-item__title">{title}</h4>

                <ul className="toc-item__list">

                    {itemsData.map((item) => (
                        <Link to={`/recipe/${item.id}`} key={item.id}  className="recipe-link">
                            <li className="toc-item-list__recipe-item">
                                <span className="recipe-item__number">{item.id}</span>
                                <span className="recipe-item__title">{item.title}</span>
                            </li>
                        </Link>
                    ))}

                </ul>

            </div>

        </div>
    )

}

export default TocItem;