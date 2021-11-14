import React from 'react'
import RadioButton from '../RadioButton/RadioButton'

export const CategoriesFetch = React.memo(function CategoriesFetch({ activeCategory, items, onClickCategory }) {

  return (
    <div className='category__select'>
      <div className='horizontal__radioGrup'>
        <RadioButton
          checked={activeCategory === null ? true : false}
          onChange={() => onClickCategory(null)}
        >Все</RadioButton>
        {items &&
          items.map((cat) =>
            <RadioButton
              checked={activeCategory === cat.id ? true : false}
              key={cat.id}
              onChange={() => onClickCategory(cat.id)}
            >
              {cat.name}
            </RadioButton>
          )}
      </div>
    </div>
  )
})
