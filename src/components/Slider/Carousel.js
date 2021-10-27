import React from 'react';
import { useState } from 'react';
import { PagesData } from './PagesData';
import SliderCard from './SliderCard';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = PagesData.length;

  const nextSlide = () => {
    setActiveIndex(activeIndex === length - 1 ? 0 : activeIndex + 1);
  };

  const prevSlide = () => {
    setActiveIndex(activeIndex < 1 ? length - 1 : activeIndex - 1);
  };

  const moveDot = (index) => {
    setActiveIndex(index)
  };


  return (
    <div className='carousel'>
      {PagesData.map((slide, index) => {
        return (
          <div
            className={index === activeIndex ? 'slider active' : 'slider'}
            key={index}
          >
            {index === activeIndex && (
              <SliderCard
                title={slide.title}
                text={slide.text}
                imgPath={slide.imgPath}
                btnColor={slide.btnColor}
                btnColorHover={slide.btnColorHover}
              />
            )}
          </div>
        )
      })}
      <div className='arrow__btn'
        role="button"
        onClick={prevSlide}
      >
        <div className='arrow__left' />
      </div>

      <div className='arrow__btn right'
        role="button"
        onClick={nextSlide}
      >
        <div className='arrow__right' />
      </div>

      <div className='all-dots'>
        {Array.from({ length }).map((item, index) => (
          <div
            key={index}
            className={activeIndex === index ? 'dot active-dot' : 'dot'}
            onClick={() => moveDot(index)}
          />
        ))}
      </div>

    </div>
  )
}

export default Carousel
