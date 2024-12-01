import React from 'react';
import '../styles/select.css';
import { SelectProps } from '../types/types';

const SelectComponent = (props:SelectProps) => {
  return (
    <div className="select-container">
      <label htmlFor="options">{props.label}</label>
      <select id="options" className="select-box">
        {props.options.map(option=>{
            return <option value={option.value}>{option.displayValue}</option>
        })}
      </select>
    </div>
  );
};

export default SelectComponent;