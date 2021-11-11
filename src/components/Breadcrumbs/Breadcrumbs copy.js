import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Tab from './Tab';
import { selectTab } from '../../redux/actions/tab';


const Menu = () => {
  const dispatch = useDispatch();
  const tabsData = useSelector((state) => state.tabsData)

  return (
    <div className='breadcrumbs__wrap'>
      <div className='breadcrumbs__container'>
        {tabsData?.map((tab, index) =>
          <Tab
            onClickTab={() => dispatch(selectTab(tab.title))}
            key={index}
            to={`/${tab.path}`}
            title={tab.title}
          />
        )}
      </div>
    </div>
  )
}

export default Menu
