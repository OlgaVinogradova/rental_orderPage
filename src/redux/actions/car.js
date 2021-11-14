
export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const setCars = (car) => ({
  type: 'SET_CARS',
  payload: car,
});

export const selectedCar = (carObj) => ({
  type: 'SELECTED_CAR',
  payload: carObj,
});