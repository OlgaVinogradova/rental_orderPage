import React from 'react';
import Tab from './Tab';

const tabsData = [
  {
    id: 1,
    title: 'Местоположение',
    path: 'location'
  },
  {
    id: 2,
    title: 'Модель',
    path: 'model'
  },
  {
    id: 3,
    title: 'Дополнительно',
    path: 'option'
  },
  {
    id: 4,
    title: 'Итого',
    path: 'subtotal'
  },
  {
    id: 5,
    title: 'Модель(Fetch)',
    path: 'modelFetch'
  },
]


const Menu = () => {

  return (
    <div className='breadcrumbs__wrap'>
      <div className='breadcrumbs__container'>
        {tabsData?.map((tab) =>
          <Tab
            key={tab.id}
            to={`/${tab.path}`}
            title={tab.title}
          />
        )}
      </div>
    </div>
  )
}

export default Menu
