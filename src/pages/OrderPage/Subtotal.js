import React from 'react'
import OrderPage from './OrderPage';
import { useSelector, useDispatch } from 'react-redux';

import { activePage } from '../../redux/actions/step';

const Subtotal = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(activePage('SELECT_SUBTOTAL'))
  }, []);


  return (
    <OrderPage>

    </OrderPage>
  )
}

export default Subtotal
