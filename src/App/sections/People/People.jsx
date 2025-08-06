import "./People.css"

import PersonCard from "./components/PersonCard/PersonCard.jsx";

function People() {
    return (
        <section id="peopleSection">
            <div className="people-content-container">

                <img className="people-bg" src="img/book.png" alt="book"/>

                <div className="person-cards-container">
                    {PersonCard({title: "Левахин Лев",
                        role: "Муж",
                        description: "лялялял ял яля лляля лялялялялялялл ял ялялялял ялялялл яля лялялялялялялляля лялялялялялялляля лялялялялялялляля ляляляляляляллялялялялялялялялляляляляляляляляллялялялялялялялялляля лялялялялялялляля лялялялялялялляля",
                        img: "img/header-bg.png"
                    })}
                </div>

            </div>
        </section>
    )
}

export default People;