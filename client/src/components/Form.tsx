import React from 'react'
import { FormProps } from '../types/types'
import '../styles/form.css'
function Form(props:FormProps) {
  return (
    <div className='flex-center-center'>
      <form>
        {props.children}
      </form>
    </div>
  )
}

export default Form
