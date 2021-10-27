// export const domain = 'https://api-factory.simbirsoft1.com/api'

// export const LINKS = {
//   carsTable: domain + '/db/car',
//   cityTable: domain + '/db/city'
// }
import { key } from './key'
import axios from 'axios';

const LINK_ROOT = 'https://api-factory.simbirsoft1.com/api';
const LINK_CITY = '/db/city';


export const getApiResourse = () => {
  axios.get('https://api-factory.simbirsoft1.com/api/db/point', key).then((res) => {
    const allLeagues = res.data;
    console.log(allLeagues)
  })
}


