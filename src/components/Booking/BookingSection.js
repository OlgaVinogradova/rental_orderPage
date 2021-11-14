import React from 'react';
import Text from '../typography/Text';

export const BookingSection = ({ label, value }) => {
  return (
    <div className='order__data'>
      <Text>{label}</Text>
      <div className="dots"></div>
      <Text className="text-small">{value}
      </Text>
    </div>
  )
}
