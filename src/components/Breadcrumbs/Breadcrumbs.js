import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTabBooking } from "../../redux/actions/booking";
import Tab from './Tab';

const Menu = () => {
  const dispatch = useDispatch();
  const tabsData = useSelector(({ tabsData }) => tabsData)

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
