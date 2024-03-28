import React, { useState, useEffect } from 'react';
import './Carousel.css';
import sl1 from './CarouselData.js';
const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [variable, setVariable] = useState(false);
    var w = window.innerWidth;
    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            setVariable(windowWidth < 900);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        // return () => {
        //     window.removeEventListener('resize', handleResize);
        // };
    }, []);
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };
    return (
        <div className='main-carousel' data-ride="carousel">
            {!variable ? (
                sl1.slides.map((item, index) => (
                    <img
                        src={item.src}
                        alt={item.alt}
                        key={index}
                        className={index === currentSlide ? "slide" : "slide slide-hidden"}
                    />
                ))
            ) : (
                sl1.slides.slice(3).map((item, index) => (
                    <img
                        src={item.src}
                        alt={item.alt}
                        key={index}
                        className={index === currentSlide ? "slide" : "slide slide-hidden"}
                    />
                ))
            )}
            <div className="ind">
                <span className='indicators'>
                    {sl1.slides.slice(3).map((_, index) => (
                        <button
                            onClick={() => goToSlide(index)}
                            className={index === currentSlide ? 'indicator active' : 'indicator'}
                            key={index}
                        ></button>
                    ))}
                </span>
            </div>

        </div>
    );
};

export default Carousel;
