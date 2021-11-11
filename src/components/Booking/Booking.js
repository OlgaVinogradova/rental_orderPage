import React from 'react';
import Title from '../typography/Title';
import Button from '../button/Button';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BookingSection } from './BookingSection';
import { BookingButton } from './BookingButton';


const Booking = () => {
  const { pointAddress } = useSelector((store) => store.point)
  const { cityName } = useSelector((store) => store.city)
  const { activePage } = useSelector((store) => store.step)

  const model = useSelector((store) => store.cars.items)

  const selectAllOption = useSelector((store) => store.cars.items)

  return (
    <div className='booking'>
      <div className='booking__content'>
        <Title>Ваш заказ:</Title>
        {cityName && <BookingSection label='Пункт выдачи' value={`${cityName}, ${pointAddress}`} />}
        {model.name && <BookingSection label='Модель' value={`${model.name}`} />}
        {model.name && <div className='prise'><b>Цена:</b> от {model.priceMin} до {model.priceMax}</div>}
      </div>
      <div className='btn__booking'>
        <BookingButton
          pointAddress={pointAddress}
          model={model.name}
          activePage={activePage}
          selectAllOption={selectAllOption}
        />
      </div>
    </div>
  )
}

export default Booking
