import React from 'react';
import moment from 'moment'
import Title from '../typography/Title';
import { useSelector } from 'react-redux';
import { BookingSection } from './BookingSection';
import { BookingButton } from './BookingButton';
import { Price } from './Price';


const Booking = () => {
  const { selectedAddress } = useSelector((store) => store.point)
  const { cityName } = useSelector((store) => store.city)
  const { activePage } = useSelector((store) => store.step)

  const model = useSelector((store) => store.cars.items)
  const { colorName } = useSelector((store) => store.cars)
  const { selectedRate, rate } = useSelector((store) => store.rate)

  const { dateStart, dateEnd } = useSelector(state => state.datePiker)

  const { fullTank, needChildChair, rightWheel } = useSelector((store) => store.addServices)

  const newRateType = rate.find((i) => i.id === selectedRate);
  const ratePrise = newRateType ? newRateType.price : null

  const rateName = newRateType?.rateTypeId && newRateType.rateTypeId.name

  const selectAllOption = colorName && selectedRate && dateEnd


  const date1 = moment(dateEnd, 'DD HH');
  const date2 = moment(dateStart, 'DD HH');
  const minute = date1.diff(date2, 'minute',)

  const ConvertDate = (num) => {
    const days = Math.floor(num / 1440);
    const hours = Math.floor((num % 1440) / 60);
    const minutes = (num % 1440) % 60;
    return {
      days: days,
      hours: hours,
      minutes: minutes
    };
  }
  const date = ConvertDate(minute)

  return (
    <div className='booking'>
      <div className='booking__content'>
        <Title>Ваш заказ:</Title>
        {cityName && <BookingSection label='Пункт выдачи' value={`${cityName}, ${selectedAddress}`} />}
        {model.name && <BookingSection label='Модель' value={`${model.name}`} />}
        {colorName && <BookingSection label='Цвет' value={`${colorName}`} />}
        {dateEnd && < BookingSection label="Длительность аренды" value={`${date.days} д. ${date.hours} ч.`} />}
        {selectedRate && <BookingSection label='Тариф' value={`${rateName}`} />}
        {fullTank && <BookingSection label='Полный бак' value='Да' />}
        {needChildChair && <BookingSection label='Детское кресло' value='Да' />}
        {rightWheel && <BookingSection label='Правый руль' value='Да' />}

        <Price
          model={model.name}
          priceMin={model.priceMin}
          priceMax={model.priceMax}
          activePage={activePage}
          fullTank={fullTank}
          needChildChair={needChildChair}
          rightWheel={rightWheel}
          ratePrise={ratePrise}
        />

      </div>
      <div className='btn__booking'>
        <BookingButton
          selectedAddress={selectedAddress}
          model={model.name}
          activePage={activePage}
          selectAllOption={selectAllOption}
        />
      </div>
    </div>
  )
}

export default Booking
