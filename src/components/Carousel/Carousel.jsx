import React, { useState } from 'react';
import './Carousel.css';
import sl1 from './CarouselData.js';
const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };
    return (
        <div className='main-carousel'>
            {sl1.slides.map((item, index) => (
                <img
                    src={item.src}
                    alt={item.alt}
                    key={index}
                    className={index === currentSlide ? "slide" : "slide slide-hidden"}
                />
            ))}
            <div className="ind">
                <span className='indicators'>
                    {sl1.slides.map((_, index) => (
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
