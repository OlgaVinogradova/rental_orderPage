import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { BreadcrumbsData } from './BreadcrumbsData';

import Tab from './Tab';

const Menu = () => {

  let { url } = useRouteMatch();

  return (
    <div className='breadcrumbs__wrap'>
      <div className='breadcrumbs__container'>
        {BreadcrumbsData.map((tab, index) =>
          <Tab
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
