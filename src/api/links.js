export const url = 'https://api-factory.simbirsoft1.com/api'

export const LINKS = {
  cities: url + '/db/city',
  point: url + '/db/city',
  pointAddress: (selectedCityId) => (selectedCityId ? url + `/db/point?cityId=${selectedCityId}` : url + '/db/city'),
  category: url + '/db/category',
  cars: url + '/db/car',
  carsCategory: (selectedCategoryId) => (selectedCategoryId ? url + `/db/car?categoryId=${selectedCategoryId}` : url + '/db/car'),
};

