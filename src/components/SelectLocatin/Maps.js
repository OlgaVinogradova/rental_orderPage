import React from 'react'
import Map from '../../assets/image/map.png'
import Text from '../typography/Text'

const Maps = () => {
  return (
    <div className='map'>
      <Text className='content__text' >Выберете на карте:</Text>
      <img src={Map} alt='map' />
    </div>
  )
}

export default Maps
