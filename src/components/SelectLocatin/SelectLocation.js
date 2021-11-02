import React from 'react';

import { useSelector } from 'react-redux';

import { SelectCity } from './SelectCity';
import { SelectPoint } from './SelectPoint';


export const SelectLocation = () => {

  const { point } = useSelector((store) => store.point?.items)

  const { cityName } = useSelector((store) => store.city)
  return (
    <div className='content__select'>
      <SelectCity point={point} />
      <SelectPoint cityName={cityName} />
    </div>
  )
}
