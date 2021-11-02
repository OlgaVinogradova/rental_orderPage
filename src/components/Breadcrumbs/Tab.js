import React from 'react'
import { NavLink } from "react-router-dom";
import TriangleRight from '../svg/triangleRight';

const Tab = ({ to, title, onSelect }) => {

  return (
    <div className='tab'
      onClick={onSelect}
    >
      <NavLink to={to || '/'} className='tab__link' activeClassName='active'>
        <span className='tab__title'>{title}</span>
      </NavLink>
      <div className='triangle'>
        <TriangleRight />
      </div>
    </div>
  )
}

export default Tab
