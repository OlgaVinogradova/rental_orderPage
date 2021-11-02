import axios from "axios";
import { key } from "../../api/key";

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchCars = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get('https://api-factory.simbirsoft1.com/api/db/car', key).then(({ data }) => {
    dispatch(setCars(data))
  });
};

export const setCars = (car) => ({
  type: 'SET_CARS',
  payload: car,
});