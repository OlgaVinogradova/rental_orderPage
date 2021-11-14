import React from 'react';
import Checkbox from '../Checkbox/Checkbox';

export const AddServices = ({ items, onClickServices, activeServices }) => {
  return (
    <div className='category__select'>
      {items &&
        items.map((item) =>
          <Checkbox

            key={item.id}
            name={item.name}
            id={item.title}
            checked={activeServices === item.name ? true : false}
            onChange={() => onClickServices(item.name)}
          >

            {`${item.title},${item.prise}₽`}

          </Checkbox>

        )

      }
    </div>
  )
}