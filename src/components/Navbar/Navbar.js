import React from 'react';
import { useState } from 'react';
import { PagesData } from '../Slider/PagesData';
import Inst from '../svg/inst';
import Facebook from '../svg/facebook';
import Telegram from '../svg/telegram';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const burgerOpen = click ? 'burgerMenu__open' : 'burgerMenu__close';

  return (
    <nav className={click ? 'navbar__a' : 'navbar'}>
      <div className="navbar__burgerMenu"
        role="button"
        onClick={handleClick}>
        <span className={burgerOpen}></span>
        <span className={burgerOpen}></span>
        <span className={burgerOpen}></span>
        <span className={burgerOpen}></span>
      </div>
      <div className={click ? 'navbar__menu_active' : 'navbar__menu'}>
        <div className='menu__container'>
          <ul className='menu__list'>
            {PagesData.map((link, index) =>
              <li className='menu__items' key={index}>
                <div
                  className='menu__link'
                  onClick={closeMenu}
                >
                  {link.name}
                </div>
              </li>)}
          </ul>
          <div className='menu__contacts'>
            <a className='contacts_icons'>
              <Telegram />
            </a>
            <a className='contacts_icons'>
              <Facebook />
            </a>
            <a className='contacts_icons'>
              <Inst />
            </a>
          </div>
        </div>
        <div className='blur'></div>
      </div>
      <button
        className={click ? 'navbar__btn' : 'navbar__btn__a'}
      >
        Eng</button>
    </nav>
  )
}

export default Navbar
