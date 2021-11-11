import React from 'react'
import { NavLink } from "react-router-dom";
import TriangleRight from '../svg/triangleRight';

import { useDispatch, useSelector } from 'react-redux';
import { selectTab } from '../../redux/actions/tab';

const Tab = ({ to, title, onClickTab, active }) => {

  return (
    <div className='tab'
      onClick={onClickTab}
    >
      <NavLink to={to || '/'}
        className={active === title ? "active" : "tab__link"}
      // className='tab__link' activeClassName='active'

      >
        <span className='tab__title'>{title}</span>
      </NavLink>
      <div className='triangle'>
        <TriangleRight />
      </div>
    </div>
  )
}

export default Tab
