import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPointBooking } from "../../redux/actions/booking";

import { getPoints } from '../../redux/reducers/pointReducer';


import Datalist from '../DataList/Datalist';
import Text from '../typography/Text';

export const SelectPoint = () => {

  const dispatch = useDispatch()
  const point = useSelector(({ point }) => point.items)

  React.useEffect(() => {
    dispatch(getPoints())
  }, []);

  const onChangeAdress = (e) => dispatch(setPointBooking(e.target.value))

  return (

    <div className='select'>
      <label><Text>Пункт выдачи</Text></label>
      <Datalist
        data={point}
        name='adress-list'
        onChange={onChangeAdress}
        placeholder='Начните вводить пункт...'
      />
    </div>
  )
}
