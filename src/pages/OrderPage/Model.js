
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderPage from './OrderPage';
import CarsCard from '../../components/CarsCard/CarsCard';
import { Categories } from '../../components/Categories/Categories';
import { setCategory } from '../../redux/actions/category';
import { fetchCars } from '../../redux/actions/fetch';
import { Loader } from '../../components/Loader/Loader';

const categoryName = ['Эконом', 'Премиум'];

const Model = () => {
  const dispatch = useDispatch();

  const items = useSelector((store) => store.cars.items);
  const isLoaded = useSelector((store) => store.cars.isLoaded);
  const category = useSelector((store) => store.category.category);

  React.useEffect(() => {
    dispatch(fetchCars());
  }, []);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  console.log(items)

  return (
    <OrderPage>
      <div className='content__select'>
        <Categories
          activeCategory={category}
          items={categoryName}
          onClickCategory={onSelectCategory}
        />
        <div className='model__wrap'>
          {/* <div className='model'>
            {isLoaded
              ? items?.map((obj, index) => <CarsCard key={index} {...obj} />)
              : <Loader />
            }
          </div> */}
        </div>
      </div>
    </OrderPage>
  )
}

export default Model