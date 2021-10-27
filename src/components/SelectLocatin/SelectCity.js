import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCitys } from '../../redux/reducers/cityReducer';
import { setCityBooking } from "../../redux/actions/booking";

import Datalist from '../DataList/Datalist';
import Text from '../typography/Text';

export const SelectCity = () => {

  const dispatch = useDispatch()
  const city = useSelector(({ city }) => city.items)

  React.useEffect(() => {
    dispatch(getCitys())
  }, []);

  const onChangeCity = (e) => dispatch(setCityBooking(e.target.value))

  return (
    <div className='select'>
      <label><Text>Город</Text> </label>
      <Datalist
        data={city}
        name='cities-list'
        onChange={onChangeCity}
        placeholder='Начните вводить город...'
      />
    </div>
  )
}
