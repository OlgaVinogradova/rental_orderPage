
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderPage from './OrderPage';
import CarsCard from '../../components/CarsCard/CarsCard';
import { CategoriesFetch } from '../../components/Categories/CategoriesFetch';
import { setCategoryId } from '../../redux/actions/filters';
import { fetchCars, fetchCategory } from '../../redux/actions/fetch';
import { Loader } from '../../components/Loader/Loader';


const ModelFetch = () => {
  const dispatch = useDispatch();

  const items = useSelector((store) => store.cars.items);
  const isLoaded = useSelector((store) => store.cars.isLoaded);
  const category = useSelector((store) => store.filters?.items);


  React.useEffect(() => {
    dispatch(fetchCategory());
  }, []);


  React.useEffect(() => {
    dispatch(fetchCars());
  }, [category]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategoryId(index));
  }, []);

  console.log(category)

  return (
    <OrderPage>
      <div className='content__select'>
        <CategoriesFetch
          activeCategory={category}
          items={category}
          onClickCategory={onSelectCategory}
        />
        <div className='model__wrap'>
          <div className='model'>
            {isLoaded
              ?
              items?.map((obj, index) => <CarsCard key={index} {...obj} />)
              : <Loader />
            }
          </div>
        </div>
      </div>
    </OrderPage>
  )
}

export default ModelFetch
