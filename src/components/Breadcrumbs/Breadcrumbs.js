import React from 'react';
import { useSelector } from 'react-redux';

import Tab from './Tab';


const Menu = () => {

  const { selectedAddress } = useSelector((store) => store.point)
  const { cityName } = useSelector((store) => store.city)
  const { activePage } = useSelector((store) => store.step)
  const { colorName } = useSelector((store) => store.cars)
  const { selectedRate } = useSelector((store) => store.rate)
  const { dateEnd } = useSelector(state => state.datePiker)
  const model = useSelector((store) => store.cars.items.name)

  const selectAllOption = colorName && selectedRate && dateEnd

  return (
    <div className='breadcrumbs__wrap'>
      <div className='breadcrumbs__container'>
        <Tab title="Местоположение"
          to={`${'/location'}`}
          isActive={activePage === 'SELECT_LOCATION'}

        />
        <Tab title="Модель"
          to={selectedAddress ? `${'/model'}` : `${'/location'}`}
          isActive={activePage === 'SELECT_MODEL'}
          disabled={!cityName || !selectedAddress}

        />
        <Tab title="Дополнительно"
          to={model ? `${'/option'}` : `${'/location'}`}
          isActive={activePage === 'SELECT_ALL_OPTION'}
          disabled={!cityName || !selectedAddress || !model}
        />
        <Tab title="Итого"

          to={selectAllOption ? `${'/subtotal'}` : `${'/location'}`}
          isActive={activePage === 'SELECT_SUBTOTAL'}
          disabled={!colorName || !selectedRate || !dateEnd}
        />

      </div>
    </div>
  )
}

export default Menu
