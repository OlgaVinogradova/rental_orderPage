import React, { Fragment } from 'react';
import { priceFullTank, priceChair, priceWheel } from './../selectOption/addServicesData';

export const Price = ({ model, activePage, fullTank, needChildChair, rightWheel, ratePrise, priceMin, priceMax }) => {

  const fullTankPrice = fullTank ? priceFullTank : 0;
  const chairPrice = needChildChair ? priceChair : 0;
  const wheelPrice = rightWheel ? priceWheel : 0;

  let price = priceMin ? (priceMin + ratePrise + fullTankPrice + chairPrice + wheelPrice) : null

  return (
    <Fragment>
      {!model ? <div></div> :
        activePage === 'SELECT_ALL_OPTION' ?
          <div className='prise'><b>Цена:</b> {price}</div> :
          <div className='prise'><b>Цена:</b> от {priceMin} до {priceMax}</div>
      }
    </Fragment>
  )

}
