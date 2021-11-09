import axios from "axios";
import { key } from "../../api/key";
import { LINKS } from '../../api/links';
import { setCitys } from "./city";
import { setPoints } from "./point";
import { setCars, setLoaded } from "./car";
import { setCategory } from "./filters";

export const getCitys = () => (dispatch) => {
  axios.get(LINKS.cities, key).then(({ data }) => {
    dispatch(setCitys(data))
  });
};

export const getPoints = (selectedCityId) => (dispatch) => {
  axios.get(LINKS.pointAddress(selectedCityId), key).then(({ data }) => {
    dispatch(setPoints(data))
  });
};


export const fetchCars = (selectedCategoryId) => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get(LINKS.carsCategory(selectedCategoryId), key).then(({ data }) => {
    dispatch(setCars(data))
  });
};

export const fetchCategory = () => (dispatch) => {
  axios.get(LINKS.category, key).then(({ data }) => {
    dispatch(setCategory(data))
  });
};