import React from 'react'
import { Link } from "react-router-dom";
import TriangleRight from '../svg/triangleRight';


const Tab = ({ to, title, onClickTab, isActive }) => {

  return (
    <div className='tab'
      onClick={onClickTab}
    >
      <Link to={to || '/'}
        className={isActive ? "active" : "tab__link"}
      >
        <span className='tab__title'>{title}</span>
      </Link>
      <div className='triangle'>
        <TriangleRight />
      </div>
    </div>
  )
}

export default Tab
