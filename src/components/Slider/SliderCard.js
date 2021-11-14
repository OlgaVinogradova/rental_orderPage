import React from 'react';
import { useState } from 'react';
import Button from '../button/Button';

const SliderCard = ({ imgPath, title, text, btnColor, btnColorHover }) => {

  let stylesImg = {
    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(' + imgPath + ')',
  }

  return (

    <div className='slider__img' style={stylesImg}>
      <div className='sliderCard_content'>
        <div className='content__slider'>
          <div className='content__title'>{title}</div>
          <div className='content__subtitle'>
            {text}
          </div>
          <Button
            isVisible
            className='btn__slider'
            style={{
              '--main-bg-color': btnColor,
              '--hover-bg-color': btnColorHover,
            }}
          >Подробнее</Button>
        </div>
      </div>
    </div >

  )
}

export default SliderCard
