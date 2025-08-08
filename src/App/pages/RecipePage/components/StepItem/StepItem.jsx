import "./StepItem.css"

function StepItem({step}) {
    if (typeof step !== 'object' || step === null) {
        console.warn('Шаг не является объектом или равен null');
        return null;
    }

    const title = step.title || '';
    const description = step.description || '';
    const img = step.img || '';

    return (
        <div className="step-container">
            {title && <h4 className="step-title">{title}</h4>}
            {description && <p className="step-description">{description}</p>}
            {img && <img src={img} alt={title} className="step-img" />}
        </div>
    );
}

export default StepItem;