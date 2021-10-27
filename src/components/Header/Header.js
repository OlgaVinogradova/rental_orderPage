import React from 'react';
import { Link } from 'react-router-dom';
import LocationIcons from '../svg/locationIcons';

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='name'>Need for drive</Link>
      <div className='header__location'>
        <LocationIcons />
        <span className='location__name'>Ульяновск</span>
      </div>
    </div>
  )
}

export default Header
