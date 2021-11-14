import React from 'react';
import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import Input from '../input/Input';

export const DatePiker = ({ placeholder, pickedDate, onPickDate, minDate, maxDate }) => {
  const [date, setDate] = React.useState(pickedDate);
  const dateFilter = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <div className='select'>
      <DatePicker
        selected={date}
        minDate={minDate}
        maxDate={maxDate}
        filterTime={dateFilter}
        onChange={(newDate) => setDate(newDate)}
        onCalendarClose={() => onPickDate(date)}
        placeholderText={placeholder}
        shouldCloseOnSelect={false}
        locale={ru}
        timeCaption="Время"
        dateFormat="Pp"
        fixedHeight
        showTimeSelect
      />
    </div>
  );
};