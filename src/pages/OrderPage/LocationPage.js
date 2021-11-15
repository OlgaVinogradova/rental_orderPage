import React from 'react';
import OrderPage from './OrderPage';
import { SelectLocation } from '../../components/SelectLocatin/SelectLocation';
import Maps from '../../components/SelectLocatin/Maps';
const LocationPage = () => {
  return (
    <OrderPage>
      <SelectLocation />
      <Maps />
    </OrderPage>
  )
}

export default LocationPage
