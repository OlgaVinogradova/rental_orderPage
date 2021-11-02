import React from 'react';

const BASE_URL = 'https://api-factory.simbirsoft1.com'

const CarsCard = ({ name, priceMin, priceMax, thumbnail }) => {
  const imgStyle = {
    backgroundImage: "url(" + `${thumbnail?.path.includes('base64') ? thumbnail?.path :
      BASE_URL + thumbnail?.path}` + ")",
  };
  return (
    <div role="button" className='model__button'>
      <div className='model__card'>
        <div>
          <div className='model__name'>{name}</div>
          <div className='model__prise'>{priceMin}-{priceMax}</div>
        </div>
        <div className='model__img' style={imgStyle}></div>
      </div>
    </div>
  )
}

export default CarsCard