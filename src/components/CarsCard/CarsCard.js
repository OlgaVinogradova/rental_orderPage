import React from 'react';
const BASE_URL = 'https://api-factory.simbirsoft1.com/'

const CarsCard = ({ categoryId, colors, number, id, name, priceMin, priceMax, thumbnail, onClickModel, activeModel }) => {

  const imgStyle = {
    backgroundImage: "url(" + `${thumbnail?.path.includes('base64') ? thumbnail?.path :
      BASE_URL + thumbnail?.path}` + ")"
  }

  const handleModelCar = () => {
    const obj = {
      id,
      name,
      categoryId,
      colors,
      number,
      priceMax,
      priceMin,
      imgStyle
    }
    onClickModel(obj);
  };

  return (
    <div role="button"
      className='model__button'
      onClick={handleModelCar}
    >
      <div
        className={
          activeModel === id
            ? 'model__card model__active'
            : 'model__card'
        }
      >
        <div className='model__name'>{name}</div>
        <div className='model__prise'>{priceMin}-{priceMax}</div>
        <div className='model__img' style={imgStyle} />
      </div>
    </div>
  )
}

export default CarsCard