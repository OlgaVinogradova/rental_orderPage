import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPointName } from '../../redux/actions/point';
import { getPoints } from '../../redux/reducers/pointReducer';
import Datalist from '../DataList/Datalist';
import Text from '../typography/Text';


export const SelectPoint = () => {

  const dispatch = useDispatch()
  const point = useSelector((store) => store.point?.items)
  const city = useSelector((store) => store.city?.items)
  const { cityName } = useSelector((store) => store.city)

  React.useEffect(() => {
    dispatch(getPoints())
  }, []);

  const onChangeAdress = (e) => dispatch(setPointName(e.target.value))

  const pointAddress = point.map(item => {
    const container = {};
    container.name = item.address;
    return container;
  })

  // const selectedCity = city.find((i) => i.name === cityName)

  return (

    <div className='select'>
      <label><Text>Пункт выдачи</Text></label>
      <Datalist
        data={pointAddress}
        name='adress-list'
        onChange={onChangeAdress}
        placeholder='Начните вводить пункт...'
      />
    </div>
  )
}
