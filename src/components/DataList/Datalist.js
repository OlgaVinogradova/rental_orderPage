import React from 'react'
import Input from '../input/Input'

const Datalist = ({ data, name, onChange, placeholder }) => {
  return (
    <div className='datalist'>
      <Input
        className='datalist__input'
        list={name}
        onChange={onChange}
        type='search'
        placeholder={placeholder}
      />
      <datalist id={name}>
        {data?.map((value, key) => {
          return (
            <option value={value.name} key={key}>
              {value.name}
            </option>
          );
        })}
      </datalist>
    </div>
  )
}

export default Datalist
