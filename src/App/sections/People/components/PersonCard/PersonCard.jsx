import "./PersonCard.css"

function PersonCard({title, role, description, img}) {
    return (
        <div className="person-card">

            <div className="person-card__img-container">
                <img src={img} alt={title} className="person-img"/>
            </div>

            <div className="person-card__content-container">

                <div className="person-card__text-container">

                    <div className="text-container__title-container">
                        <h3 className="person-card__title">
                            {title}
                        </h3>
                        <span className="person-card__role">
                            {role}
                        </span>
                    </div>

                    <p className="person-card__description">
                        {description}
                    </p>
                </div>


                {/*   Тут будет кнопка с оглавлением */}

            </div>
        </div>
    )
}

export default PersonCard;