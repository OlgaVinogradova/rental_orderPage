import axios from "axios";
import { key } from "../../api/key";
import { setCitys } from "../actions/city";

const SET_CITYS = 'SET_CITYS';
const SET_CITY_NAME = 'SET_CITY_NAME';

const defaultState = {
  items: [],
  cityName: null,
}

export default function cityReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_CITYS:
      return {
        ...state,
        items: action.payload.data
      }
    case SET_CITY_NAME:
      return {
        ...state,
        cityName: action.payload
      }
    default:
      return state
  }
}


export const getCitys = () => (dispatch) => {
  axios.get('https://api-factory.simbirsoft1.com/api/db/city', key).then(({ data }) => {
    dispatch(setCitys(data))
  });
};