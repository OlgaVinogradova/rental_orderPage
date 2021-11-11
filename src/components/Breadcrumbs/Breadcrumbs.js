import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Tab from './Tab';
import { selectTab } from '../../redux/actions/tab';


const Menu = () => {
  const dispatch = useDispatch();
  // const tabsData = useSelector((state) => state.tabsData)

  const { pointAddress } = useSelector((store) => store.point)
  const { cityName } = useSelector((store) => store.city)
  const { activePage } = useSelector((store) => store.step)

  const model = useSelector((store) => store.cars.items)

  return (
    <div className='breadcrumbs__wrap'>
      <div className='breadcrumbs__container'>
        <Tab title="Местоположение"
          to={`${'/location'}`}
          isActive={activePage === 'SELECT_LOCATION'}
          isEnabled={cityName || pointAddress}
        />
        <Tab title="Модель"
          to={pointAddress ? `${'/model'}` : `${'location'}`}
          isActive={activePage === 'SELECT_MODEL'}
          isEnabled={pointAddress || cityName || pointAddress}
        />
        <Tab title="Дополнительно"
          to={model ? `${'/subtotal'}` : `${'/model'}`}
          isActive={activePage === 'SELECT_ALL_OPTION'}
          isEnabled={pointAddress || cityName || pointAddress}
        />
        <Tab title="Итого"
        />

      </div>
    </div>
  )
}

export default Menu
