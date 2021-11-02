import axios from "axios";
import { key } from "../../api/key";

export const setCategory = (cat) => ({
  type: 'SET_CATEGORY',
  payload: cat,
});

export const setCategoryId = (categoryId) => ({
  type: 'SET_CATEGORY_ID',
  payload: categoryId
})

export const fetchCategory = () => (dispatch) => {
  axios.get('https://api-factory.simbirsoft1.com/api/db/category', key).then(({ data }) => {
    dispatch(setCategory(data))
  });
};


