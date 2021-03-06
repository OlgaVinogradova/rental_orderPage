import React from 'react';
import Header from '../../components/Header/Header';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Booking from '../../components/Booking/Booking';


const OrderPage = ({ children }) => {

  return (
    <div className='op__wrap'>
      <Header />
      <Breadcrumbs />
      <div className='content'>
        {children}
        <Booking />
      </div>
    </div>
  )
}

export default OrderPage
