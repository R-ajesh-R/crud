import React, { useState } from 'react'
import { FormProps } from '../types/types'
import '../styles/form.css'
function Form(props:FormProps) {
  const [formData, setFormData] = useState<Record<string, string|string[]>>({});
  const handleChange = ({name,value}:{name:string,value:string|string[]}) => {
    console.log({name,value})
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData)
    props.onSubmit?.(formData);
  };
  const clonedChildren = React.Children.map(props.children, (child) => {
    if (React.isValidElement(child) && typeof child.type !== "string") {
      const childName = (child.props as { name?: string }).name;
      if (childName) {
        console.log('Raj',formData[childName])
        return React.cloneElement(child as React.ReactElement<any>, {
          onChange: handleChange,
          value: formData[childName],
          values: formData[childName]
        });
      }
    }
    return child;
  });

  return (
    <div className='flex-center-center button-group'>
      <form onSubmit={handleSubmit}>
        {clonedChildren}
        <button className='flex-center' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form
