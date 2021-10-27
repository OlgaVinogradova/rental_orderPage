import parking from '../../assets/image/parking.png';
import insurance from '../../assets/image/insurance.png';
import petrol from '../../assets/image/petrol.png';
import service from '../../assets/image/service.png';


export const PagesData = [
  {
    title: 'Бесплатная парковка',
    text: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
    name: 'парковка',
    path: '/parking',
    imgPath: parking,
    btnColor: 'linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)',
    btnColorHover: 'linear-gradient(90deg, #0c3029 0%, #0b5c15 100%)'
  },
  {
    title: 'Страховка',
    text: 'Полная страховка автомобиля',
    name: 'страховка',
    path: '/insurance',
    imgPath: insurance,
    btnColor: 'linear-gradient(90deg, #132949 0%, #0C7B67 100%)',
    btnColorHover: 'linear-gradient(90deg, #11223c 0%, #076251 100%)'
  },
  {
    title: 'Бензин',
    text: 'Полный бак на любой заправке города за наш счёт',
    name: 'бензин',
    path: '/petrol',
    imgPath: petrol,
    btnColor: 'linear-gradient(90deg, #493013 0%, #7B0C3B 100%)',
    btnColorHover: 'linear-gradient(90deg, #3a260f 0%, #60052b 100%)'
  },
  {
    title: 'Обслуживание',
    text: 'Автомобиль проходит еженедельное ТО',
    name: 'обслуживание',
    path: '/service',
    imgPath: service,
    btnColor: 'linear-gradient(90deg, #281349 0%, #720C7B 100%)',
    btnColorHover: 'linear-gradient(90deg, #1a0c30 0%, #4f0756 100%)'
  }
]