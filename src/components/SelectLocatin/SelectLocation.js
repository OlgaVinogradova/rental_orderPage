
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCitys, getPoints } from '../../redux/actions/fetch';

import { setPointName } from '../../redux/actions/point';
import { setCityName } from '../../redux/actions/city';
import { activePage } from '../../redux/actions/step';
import Datalist from '../DataList/Datalist';
import Text from '../typography/Text';


export const SelectLocation = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(activePage('SELECT_LOCATION'))
  }, [])
  const city = useSelector((store) => store.city?.items)
  const point = useSelector((store) => store.point?.items)

  const { cityName } = useSelector((store) => store.city)

  const { selectedAddress } = useSelector((store) => store.point)


  const newPointAddress = point.map(item => {
    const container = {};
    container.name = item.address;
    return container;
  })

  const selectedCity = city.find((i) => i.name === cityName);

  const selectedCityId = selectedCity ? selectedCity.id : null

  React.useEffect(() => {
    dispatch(getCitys())
  }, []);

  React.useEffect(() => {
    dispatch(getPoints(selectedCityId))
  }, [selectedCityId]);

  const onChangeAdress = (e) => dispatch(setPointName(e.target.value))

  const onChangeCity = (e) =>
    dispatch(setCityName(e.target.value))

  return (
    <div className='content__select'>
      <div className='select'>
        <label><Text>Город</Text> </label>
        <Datalist
          data={city}
          name='cities-list'
          onChange={onChangeCity}
          value={cityName}
          placeholder='Начните вводить город...'
        />
      </div>

      <div className='select'>
        <label><Text>Пункт выдачи</Text></label>
        <Datalist
          disabled={!selectedCityId}
          data={newPointAddress}
          value={selectedAddress}
          name='adress-list'
          onChange={onChangeAdress}
          placeholder='Начните вводить пункт...'
        />
      </div>
    </div>
  )
}
