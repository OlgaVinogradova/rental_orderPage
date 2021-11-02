import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCitys } from '../../redux/reducers/cityReducer';
import { setCityBooking } from "../../redux/actions/booking";
import Input from '../input/Input'
import Datalist from '../DataList/Datalist';
import Text from '../typography/Text';
import { setCityName } from '../../redux/actions/city';

export const SelectCity = () => {

  const dispatch = useDispatch()
  const city = useSelector((store) => store.city?.items)

  React.useEffect(() => {
    dispatch(getCitys())
  }, []);

  const onChangeCity = (e) =>
    dispatch(setCityName(e.target.value))

  console.log(city)

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
