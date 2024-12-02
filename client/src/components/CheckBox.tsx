import { useEffect, useState } from "react";
import '../styles/checkbox.css';
import { CheckBoxProps } from "../types/types";
function Checkbox(props:CheckBoxProps) {
    let val:string[]=[];
    if(props.dynamicKey){
        const key=`${props[props.genericKey]}_access`
        val=props[key];
        delete props[`${props.genericKey}_access`];
      }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        let val:string[]=[];
        if(props.values)
           val = props.values
        let values=[...val];
        if(e.target.checked){
            values.push(value);
        }else{
            values=values.filter(val=>val!==value);
        }
        props.onChange?.({name,value:values});
    };
    const values = props.values?.length > 0 ? props.values : val;
    return (
        <div className="checkbox-container">
            <label>{props.label}</label>
            {props.options.map((option, index) => (
                <div key={index} className="checkbox-container-div">
                    <input
                        checked={values?.includes(option)}
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