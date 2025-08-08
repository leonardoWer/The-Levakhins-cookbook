import "./PageSlider.css"

import { Link } from 'react-router-dom';

function PageSlider({currentPage, totalPages, baseUrl="/recipe", isTocPage=false}) {

    const hasPrevious = isTocPage || currentPage > 1;
    const hasNext = currentPage < totalPages || isTocPage;

    // Ссылка для перехода назад
    const previousLink = isTocPage ? null : (currentPage === 1 ? '/toc' : `${baseUrl}/${currentPage - 1}`);

    // Ссылка для перехода вперед
    const nextLink = isTocPage ? `${baseUrl}/1` : `${baseUrl}/${currentPage + 1}`;

    return (
        <nav className="page-slider">
            <div className="page-slider__left">
                {hasPrevious ? (
                    <Link to={previousLink} className="page-slider__link">
                        <i className="fa fa-arrow-left"></i>
                    </Link>
                ) : (
                    <span className="flink__disabled">
                        <i className="fa fa-arrow-left"></i>
                    </span>
                )}
            </div>

            <div className="page-slider__center">
                {currentPage} / {totalPages}
            </div>

            <div className="page-slider__right">
                {hasNext ? (
                    <Link to={nextLink} className="page-slider__link">
                        <i className="fa fa-arrow-right"></i>
                    </Link>
                ) : (
                    <span className="link__disabled">
                        <i className="fa fa-arrow-right"></i>
                    </span>
                )}
            </div>
        </nav>
    )
}

export default PageSlider;