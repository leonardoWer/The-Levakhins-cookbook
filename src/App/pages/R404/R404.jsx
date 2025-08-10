import "./R404.css"

import {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import gsap from 'gsap';
import {SplitText} from "gsap/SplitText";

gsap.registerPlugin(SplitText);

function R404() {
    const navigate = useNavigate();

    // Анимации
    const errorImg = useRef(null);
    const errorText = useRef(null);
    const [redirectingNumber, setRedirectingNumber] = useState(3);
    const [animationIterationCount, setAnimationIterationCount] = useState(0);

    useEffect(() => {
        // Создаем анимацию качания
         gsap.to(errorImg.current, {
            duration: 2,
            skewY: 10,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
        document.fonts.ready.then(() => {
            const splitText = new SplitText(errorText.current, {type: "chars"});
            gsap.to(splitText.chars, {
                yPercent: -10,
                stagger: 0.06,
                repeat: 3,
                ease: "power4.out",
                onRepeat: () => {
                    setAnimationIterationCount((prevCount) => prevCount + 1);
                },
            })
        })
    }, []);

    useEffect(() => {
        if (animationIterationCount > 0) {
            setRedirectingNumber((number) => number - 1); // Уменьшаем число только при изменении счетчика итераций
        }
    }, [animationIterationCount]);

    useEffect(() => {
        if (redirectingNumber <= 0) {
            navigate('/', {replace: true});
        }
    }, [redirectingNumber]);

    return (
        <div className="error-container">
            <img ref={errorImg} src="img/logo/error-404.png" alt="error-404"/>;

            <h2 ref={errorText}>Redirecting after <span className="redirecting-number">{redirectingNumber}</span></h2>
        </div>
    );
}

export default R404;