import React from 'react';
import { SelectCity } from './SelectCity';
import { SelectPoint } from './SelectPoint';


export const SelectLocation = () => {


  return (
    <div className='content__wrap'>
      <div className='content__select'>
        <SelectCity />
        <SelectPoint />
      </div>
    </div>
  )
}
