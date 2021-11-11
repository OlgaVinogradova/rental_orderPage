import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';


export const BookingButton = ({ pointAddress, model, activePage, selectAllOption }) => {

  return (
    <Fragment >
      <Link to={'/model'}>
        <Button
          disabled={!pointAddress}
          isVisible={activePage === 'SELECT_LOCATION'}
        >Выбрать модель
        </Button>
      </Link>
      <Link to={'/option'}>
        <Button
          disabled={!model}
          isVisible={activePage === 'SELECT_MODEL'}
        >
          Дополнительно</Button>
      </Link>
      <Link to={'/subtotal'}>
        <Button
          disabled={!selectAllOption}
          isVisible={activePage === 'SELECT_ALL_OPTION'}
        >
          Итого</Button>
      </Link>
    </Fragment >
  )
}
