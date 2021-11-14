import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { activePage } from '../../redux/actions/step';
import { getRateType } from '../../redux/actions/fetch';
import { ColorRadioBtn } from '../../components/selectOption/ColorRadioBtn';
import { selectedRateType } from '../../redux/actions/rateType';
import { RateTypeRadioGrup } from '../../components/selectOption/RateTypeRadioGrup';
import { setDateStart, setDateEnd } from '../../redux/actions/datePicer';
import { activeCarColor, selectedColor } from '../../redux/actions/car';

import { selectedFullTank, selectedNeedChildChair, selectedRightWheel } from '../../redux/actions/addServices';


import { DatePiker } from '../../components/selectOption/DatePiker';
import OrderPage from './OrderPage';
import Checkbox from '../../components/Checkbox/Checkbox';
import Text from '../../components/typography/Text';



const Options = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(activePage('SELECT_ALL_OPTION'))
  }, []);

  const { colorName } = useSelector((store) => store.cars);
  const itemsCars = useSelector((store) => store.cars.items);
  const { rate, selectedRate } = useSelector((store) => store.rate);
  const { fullTank, needChildChair, rightWheel } = useSelector((store) => store.addServices);

  const { dateStart, dateEnd } = useSelector(state => state.datePiker)

  const activeColor = itemsCars ? itemsCars.colors : null
  const handleCarColor = activeColor.map(item => {
    const colors = {};
    colors.name = item;
    return colors
  })

  React.useEffect(() => {
    dispatch(activeCarColor(handleCarColor))
  }, []);

  const onSelectColor = (id) =>
    dispatch(selectedColor(id));


  React.useEffect(() => {
    dispatch(getRateType());
  }, []);


  const onSelectRate = (id) =>
    dispatch(selectedRateType(id));

  const onSelectFullTank = (e) => {
    dispatch(selectedFullTank(e.target.checked))
  }
  const onSelectChair = (e) => {
    dispatch(selectedNeedChildChair(e.target.checked))
  }
  const onSelectWheel = (e) => {
    dispatch(selectedRightWheel(e.target.checked))
  }
  const hendleSelectDateEnd = (value) => {
    dispatch(setDateEnd(value))
  }

  const hendleSelectDateStart = (value) => {
    dispatch(setDateStart(value))
  }

  return (
    <OrderPage>
      <div className='content__select'>
        <Text>Цвет</Text>
        <ColorRadioBtn
          items={handleCarColor}
          onClickColor={onSelectColor}
          activeColor={colorName}
        />
        <div className='category__select'>
          <Text>Дата аренды</Text>
          <div className='select_date'>
            <label><Text>С</Text></label>
            <DatePiker
              placeholder="Введите дату и время"
              pickedDate={dateStart}
              onPickDate={hendleSelectDateStart}
              minDate={new Date()}
              maxDate={dateEnd}
            />
          </div>
          <div className='select_date'>
            <label><Text>По</Text></label>
            <DatePiker
              placeholder="Введите дату и время"
              pickedDate={dateEnd}
              onPickDate={hendleSelectDateEnd}
              minDate={new Date()}
              maxDate={dateEnd}
            />
          </div>
        </div>
        <Text>Тариф</Text>
        <RateTypeRadioGrup
          items={rate}
          onClickRate={onSelectRate}
          activeRate={selectedRate}
        />
        <Text>Доп услуги</Text>
        <Checkbox
          name='fullTank'
          checked={fullTank}
          onChange={onSelectFullTank}
        >
          Полный бак, 500₽
        </Checkbox>
        <Checkbox
          name='needChildChair'
          checked={needChildChair}
          onChange={onSelectChair}
        >
          Детское кресло, 200₽
        </Checkbox>
        <Checkbox
          name='rightWheel'
          checked={rightWheel}
          onChange={onSelectWheel}
        >
          Правый руль, 1600₽
        </Checkbox>
      </div>
    </OrderPage>
  )
}

export default Options
