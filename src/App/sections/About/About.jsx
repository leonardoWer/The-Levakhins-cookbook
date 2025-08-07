import "./About.css"

function About() {
    return (
        <section id="aboutSection">
            <div className="about-content-container">

                <div className="about-text-container">

                    <div className="title-container">

                        <div className="title-container__first-line">
                            <span className="title-label">
                                <i className="label-icon"></i>
                                <span className="label-text">О нас</span>
                            </span>
                            <h2 className="title-first-line">
                                Книга рецептов семьи Левахиных
                            </h2>
                        </div>

                        <h2 className="title-another-lines">
                             - это не просто сборник рецептов. Здесь мы делимся любимыми и проверенными рецептами, которые накопились в нашей семье за долгие годы
                        </h2>
                    </div>

                    <p className="description">
                        От бабушкиных секретов до наших собственных кулинарных экспериментов. Каждое блюдо - это частичка нашей семьи, которой мы рады поделиться с вами.
                    </p>

                </div>

                <div className="toc-button-container">

                </div>

            </div>
        </section>
    )
}

export default About;