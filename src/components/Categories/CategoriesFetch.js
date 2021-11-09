import React from 'react'
import RadioButton from '../RadioButton/RadioButton'

export const CategoriesFetch = React.memo(function CategoriesFetch({ activeCategory, items, onClickCategory }) {

  return (
    <div className='category__select'>
      <div className='horizontal__radioGrup'>
        <RadioButton
          checked={activeCategory === null ? true : false}
          onChange={() => onClickCategory(null)}
        >Все модели</RadioButton>
        {items &&
          items.map((cat, index) =>
            <RadioButton
              checked={activeCategory === index ? true : false}
              key={cat.id}
              onChange={() => onClickCategory(index)}
            >
              {cat.name}
            </RadioButton>
          )}
      </div>
    </div>
  )
})
