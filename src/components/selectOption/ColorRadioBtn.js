import React from 'react'
import RadioButton from '../RadioButton/RadioButton'

export const ColorRadioBtn = ({ activeColor, items, onClickColor }) => {

  return (
    <div className='category__select'>
      <div className='horizontal__radioGrup'>
        {items &&
          items.map((item) =>
            <RadioButton
              checked={activeColor === item.id ? true : false}
              key={item.id}
              onChange={() => onClickColor(item.id)}
            >
              {item.name}
            </RadioButton>
          )}
      </div>
    </div>
  )
}
