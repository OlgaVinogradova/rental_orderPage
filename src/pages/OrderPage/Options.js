import React from 'react'
import OrderPage from './OrderPage';
import { useSelector, useDispatch } from 'react-redux';
import { activePage } from '../../redux/actions/step';
import Text from '../../components/typography/Text';
import { ColorRadioBtn } from '../../components/selectOption/ColorRadioBtn';

const Options = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(activePage('SELECT_ALL_OPTION'))
  }, []);

  const itemsCars = useSelector((store) => store.cars.items)

  const CarColor = itemsCars ? itemsCars.colors : null
  console.log(CarColor)

  const handleActiveCarColor = CarColor.map(item => {
    const colors = {};
    colors.name = item;
    return colors
  })
  console.log(handleActiveCarColor)

  return (
    <OrderPage>
      <div className='content__select'>
        <Text>Цвет</Text>
        <ColorRadioBtn
          items={handleActiveCarColor}
        />
      </div>
    </OrderPage>
  )
}

export default Options
