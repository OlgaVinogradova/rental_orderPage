import React from 'react'
import Input from '../input/Input'

const Datalist = ({ data, name, onChange, placeholder, onSelect, disabled }) => {
  return (
    <div className='datalist'>
      <Input
        className='datalist__input'
        list={name}
        disabled={disabled}
        onChange={onChange}
        type='search'
        placeholder={placeholder}
      />
      <datalist id={name}
        onSelect={onSelect}
      >
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
