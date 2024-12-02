import React, { useEffect } from 'react';
import '../styles/select.css';
import { SelectProps } from '../types/types';

const SelectComponent = (props:SelectProps) => {
  useEffect(()=>{
    props.onChange?.({name:props.name,value:props.options[0].value});
},[])
  const handleChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    const {name='',value=''}=e.target;
    props.onChange?.({name,value});
  }
  return (
    <div className="select-container">
      <label htmlFor="options">{props.label}</label>
      <select defaultValue={props.options[0].value} name={props.name} onChange={handleChange} id="options" className="select-box">
        {props.options.map(option=>{
            return <option value={option.value}>{option.displayValue}</option>
        })}
      </select>
    </div>
  );
};

export default SelectComponent;