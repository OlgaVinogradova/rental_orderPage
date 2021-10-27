import React from 'react';
import Title from '../typography/Title';
import Text from '../typography/Text';
import Button from '../button/Button';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Booking = () => {
  const { cityName, tabTitle } = useSelector(({ booking }) => booking)

  return (
    <div className='booking'>
      <div className='booking__content'>
        <Title>Ваш заказ:</Title>
        <div className='order__data'>
          <Text></Text>
          <div className="dots"></div>
          <Text className="text-small">{cityName}
          </Text>
        </div>
      </div>
      <div className='prise'>

      </div>
      <div className='btn__booking'>
        <Link to='/model'>
          <Button className='btn'
          >{tabTitle}</Button>
        </Link>
      </div>
    </div>
  )
}

export default Booking
