import { useEffect, useState } from "react";
import '../styles/checkbox.css';
import { CheckBoxProps } from "../types/types";
function Checkbox(props:CheckBoxProps) {
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        let values=[...props.values];
        if(e.target.checked){
            values.push(value);
        }else{
            values=values.filter(val=>val!==value);
        }
        props.onChange?.({name,value:values});
    };
    return (
        <div className="checkbox-container">
            <label>{props.label}</label>
            {props.options.map((option, index) => (
                <div key={index} className="checkbox-container-div">
                    <input
                        checked={props.values?.includes(option)}
                        type="checkbox"
                        id={`checkbox-${index}`}
                        value={option}
                        name={props.name}
                        onChange={handleChange}
                    />
                    <label htmlFor={`checkbox-${index}`}>{option}</label>
                </div>
            ))}
        </div>
    );
}

export default Checkbox;