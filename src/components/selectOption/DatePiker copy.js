import React from 'react';
import Input from '../input/Input';

export const DatePiker = ({ pickedDate, onOk, minDate, maxDate }) => {
  const [date, setDate] = React.useState(pickedDate);
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };
  return (
    <div className='select'>
      <Input
        onOk={onOk}
        className='dateTime__input'
        selected={date}
        // type={newTypeStart}
        placeholder="Введите дату и время"
        minDate={minDate}
        maxDate={maxDate}
        filterTime={filterPassedTime}
        onChange={(newDate) => setDate(newDate)}
      />
    </div>
  )
}
