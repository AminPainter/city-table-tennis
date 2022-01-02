import React, { useState, useEffect } from 'react';

import Slide from './slide';
import Control from './control';

import ArrowLeft from '../../assets/arrowleft.svg';
import ArrowRight from '../../assets/arrowright.svg';

const Slider = props => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const MAX_SLIDES = props.children?.length;

    useEffect(() => {
        if (!props.autoPlay) return;

        const timer = setTimeout(() => {
            if (props.autoPlayDirection === 'left')
                setCurrentSlide(currentSlide - 1 >= 0 ? currentSlide - 1 : MAX_SLIDES - 1)
            else
                setCurrentSlide((currentSlide + 1) % MAX_SLIDES);
        }, 3000);

        return () => clearTimeout(timer);
    });

    return (
        <div className='relative overflow-x-hidden h-full'>
            {
                props.children
                    ? props.children.length
                        ? props.children.map((child, slideNumber) => (
                            <Slide key={slideNumber} translate={100 * (slideNumber - currentSlide)}>
                                {child}
                            </Slide>
                        ))
                        : props.children
                    :
                    <></>
            }

            {
                props.hideControls || !props.children.length
                    ? <></>
                    : <>
                        <Control align='left' label={<ArrowLeft />} onClick={() => setCurrentSlide(currentSlide - 1 >= 0 ? currentSlide - 1 : MAX_SLIDES - 1)} />
                        <Control align='right' label={<ArrowRight />} onClick={() => setCurrentSlide((currentSlide + 1) % MAX_SLIDES)} />
                    </>
            }
        </div>
    );
};

export default Slider;