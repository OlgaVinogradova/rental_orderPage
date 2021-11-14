import React from 'react'
import RadioButton from '../RadioButton/RadioButton'
import Text from '../typography/Text'

export const ColorRadioBtn = React.memo(function ColorRadioBtn({ activeColor, items, onClickColor }) {



  return (
    <div className='category__select'>
      <div className='horizontal__radioGrup'>
        <RadioButton
          name='radioColor'
          checked={activeColor === null ? true : false}
          onChange={() => onClickColor(null)}
        ><Text>Любой</Text></RadioButton>
        {items &&
          items.map((item, index) =>
            <RadioButton
              name='radioColor'
              checked={activeColor === item.name ? true : false}
              key={`${item.name}_${index}`}
              onChange={() => onClickColor(item.name)}
            >
              <Text>{item.name}</Text>
            </RadioButton>
          )}
      </div>
    </div>
  )
})
