import React from 'react'
import { Link } from "react-router-dom";
import TriangleRight from '../svg/triangleRight';


const Tab = ({ to, title, isActive, isEnabled, disabled }) => {


  return (
    <div className='tab'
    >
      <Link to={to || '/'}

        className={isActive ? "active" :
          // isEnabled ? 'enabled' :
          disabled ? 'disabled' :
            "tab__link"}
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
