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
                                <span className="label-text">lorem 40</span>
                            </span>
                            <h2 className="title-first-line">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </h2>
                        </div>

                        <h2 className="title-another-lines">
                            Enim eveniet placeat quae recusandae unde. Accusamus at neque nisi officia porro possimus quaerat quis sapiente. Aut, earum eum itaque odit ratione tempora. Cumque, natus, sequi? Animi eius id impedit mollitia veritatis.
                        </h2>
                    </div>

                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda doloribus eum facilis nemo nostrum, rem sit voluptatum. Doloribus nam, odit?
                    </p>

                </div>

                <div className="toc-button-container">

                </div>

            </div>
        </section>
    )
}

export default About;