import React from 'react';
import RadioButton from '../RadioButton/RadioButton';


export const RateTypeRadioGrup = React.memo(function RateTypeRadioGrup({ activeRate, items, onClickRate }) {
  return (
    <div className='category__select'>
      <div className='vertical__radioGrup'>
        {items &&
          items.map((rate) =>
            <RadioButton
              name='radioRate'
              checked={activeRate === rate.id ? true : false}
              key={rate.id}
              onChange={() => onClickRate(rate.id)}
            >
              {`${rate.rateTypeId.name}, ${rate.price} ₽/${rate.rateTypeId.unit}`}
            </RadioButton>
          )}
      </div>
    </div>
  )
})
