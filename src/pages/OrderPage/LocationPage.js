import React from 'react';
import OrderPage from './OrderPage';
import { SelectLocation } from '../../components/SelectLocatin/SelectLocation';
const LocationPage = () => {
  return (
    <OrderPage>
      <SelectLocation />
    </OrderPage>
  )
}

export default LocationPage
