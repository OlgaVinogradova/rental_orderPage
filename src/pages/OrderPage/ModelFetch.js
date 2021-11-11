
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderPage from './OrderPage';
import CarsCard from '../../components/CarsCard/CarsCard';
import { CategoriesFetch } from '../../components/Categories/CategoriesFetch';
import { setCategoryId } from '../../redux/actions/filters';
import { getCars, getCategory } from '../../redux/actions/fetch';
import { selectedCar } from '../../redux/actions/car';
import { activePage } from '../../redux/actions/step';
import { Loader } from '../../components/Loader/Loader';


const ModelFetch = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(activePage('SELECT_MODEL'))
  }, [])

  const { cars, isLoaded } = useSelector((store) => store.cars)
  const itemsCars = useSelector((store) => store.cars.items)

  const { categories, categoryId } = useSelector((store) => store.filters)


  React.useEffect(() => {
    dispatch(getCategory());
  }, []);

  const onSelectCategory = React.useCallback((id) => {
    dispatch(setCategoryId(id));
  }, []);

  React.useEffect(() => {
    dispatch(getCars(categoryId));
  }, [categoryId]);

  const handleactiveCarId = itemsCars ? itemsCars.id : null

  const onSelectModel = (obj) => {
    dispatch(selectedCar(obj))
  }

  return (
    <OrderPage>
      <div className='content__select'>
        <CategoriesFetch
          activeCategory={categoryId}
          items={categories}
          onClickCategory={onSelectCategory}
        />
        <div className='model__wrap'>
          <div className='model'>
            {/* <CarsCard
              items={cars}
              onClickModel={onSelectCar}
              activeModel={carName}
              isLoaded={isLoaded}
            /> */}
            {isLoaded
              ?
              cars?.map((obj) =>
                <CarsCard key={obj.id}
                  {...obj}
                  onClickModel={onSelectModel}
                  activeModel={handleactiveCarId}
                />)
              : <Loader />
            }
          </div>
        </div>
      </div>
    </OrderPage>
  )
}

export default ModelFetch
