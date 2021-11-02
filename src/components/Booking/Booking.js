import React from 'react';
import Title from '../typography/Title';
import Text from '../typography/Text';
import Button from '../button/Button';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Booking = () => {
  const { pointAddress } = useSelector((store) => store.point)
  const { cityName } = useSelector((store) => store.city)
  const { tabName } = useSelector((store) => store.tab)

  return (
    <div className='booking'>
      <div className='booking__content'>
        <Title>Ваш заказ:</Title>
        {cityName === null ? <div></div> :
          <div className='order__data'>
            <Text>Пункт выдачи</Text>
            <div className="dots"></div>
            <Text className="text-small"><p>{cityName},</p> {pointAddress}
            </Text>
          </div>
        }
        <div className='prise'>
        </div>
      </div>
      <div className='btn__booking'>
        <Link to='/model'>
          <Button className='btn'
          >{tabName}</Button>
        </Link>
      </div>
    </div>
  )
}

export default Booking
