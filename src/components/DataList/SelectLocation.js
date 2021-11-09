import React, { useState, useEffect } from 'react';
import { LocationData } from './LocationData';
import Text from '../../typography/Text';
import '../content.scss'
import Datalist from '../../DataList/Datalist';
import axios from 'axios';



const SelectLocation = () => {

  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedAdress, setSelectedAdress] = useState();

  const availableAdress = LocationData.cities.find((city) => city.name === selectedCity);

  const arrAdress = availableAdress?.adress.map((item) => {
    const container = {};
    container.name = item;
    return container;
  })

  const onChangeAdress = (e) => setSelectedAdress(e.target.value)
  const onChangeCity = (e) => setSelectedCity(e.target.value)

  // const [categories, getCategories] = useState([]);
  // useEffect(() => {
  //   const apiUrl = 'https://api-factory.simbirsoft1.com/api/db/city/';
  //   axios.get(apiUrl,
  //     {
  //       method: 'GET',
  //       headers: {
  //         'X-Api-Factory-Application-Id': "573dc006a04857a8235f523c"
  //       }
  //     })
  //     .then((resp) => {
  //       const allCity = resp.data;
  //       getCategories(allCity);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });

  // }, [getCategories]);
  // console.log(categories)


  return (
    <div className='content__select'>
      <div className='select'>
        <label><Text>Город</Text> </label>
        <Datalist
          data={LocationData.cities}
          name='cities-list'
          onChange={onChangeCity}
          placeholder='Начните вводить город...'
        />
      </div>
      <div className='select'>
        <label><Text>Пункт выдачи</Text></label>
        <Datalist
          data={arrAdress}
          name='adress-list'
          onChange={onChangeAdress}
          placeholder='Начните вводить пункт...'
        />
      </div>
    </div>
  );
}
export default SelectLocation
