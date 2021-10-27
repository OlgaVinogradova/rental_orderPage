import { useState, useEffect } from 'react'
import { key } from './key'
import { ObjectToQueryString } from '../components/typography/url'
import axios from 'axios';

export const useFetch = (url, params = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const queryString = ObjectToQueryString(params)

  useEffect(() => {
    axios.get(`${url}${queryString}`, key).then((res) => {
      const allLeagues = res.data;
      setData(allLeagues)
      setIsLoading(false)
    }).catch((error) => {
      setIsError(true)
      setIsLoading(false)
    })
  }, [url])

  return [{ data, setData, isLoading, setIsLoading, isError, setIsError }]
};



  // const [categories, getCategories] = useState([]);
  // useEffect(() => {
        // const apiUrl = 'https://api.football-data.org/v2/competitions/';
  //   const apiUrl = 'https://api-factory.simbirsoft1.com/api/db/city';
  //   axios.get(apiUrl,
  //     {method: 'GET',
          // headers: {'X-Auth-Token': "09c745fb9573438daaba0e0d971e0a04"}
  //       headers: {'X-Api-Factory-Application-Id': "573dc006a04857a8235f523c"}
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