import React from 'react'
import RadioButton from '../RadioButton/RadioButton'

export const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {

  return (
    <div className='category__select'>
      <div className='horizontal__radioGrup'>
        <RadioButton
          checked={activeCategory === null ? true : false}
          onChange={() => onClickCategory(null)}
        >Все модели</RadioButton>
        {items &&
          items.map((name, index) =>
            <RadioButton
              checked={activeCategory === index ? true : false}
              key={`${name}_${index}`}
              onChange={() => onClickCategory(index)}
            >
              {name}
            </RadioButton>
          )}
      </div>
    </div>
  )
})
