import SelectComponent from '../components/Select'
import Form from '../components/Form'
import { RolesAccessOptions, RolesMenuOptions, RolesSelectOptions } from '../config'
import Checkbox from '../components/CheckBox'
import TextInput from '../components/Text'
import { useEffect } from 'react'
import axios from 'axios'
import { AxiosInstance } from '../axios'

function RolesPage() {
  const onSubmit=async(values:Record<string,string|string[]>)=>{
    const newKey=`${values['menu']}_access`;
    values[newKey] = values['access'];
    delete values['access'];
    const response=await AxiosInstance.put('/roles',values);
  }
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <TextInput name='userName' label='User Name' />
        <TextInput type='password' name='password' label='Pass Word' />
        <SelectComponent name="role" options={RolesSelectOptions} label="Role Name" />
        <SelectComponent name="menu" options={RolesMenuOptions} label="Menu" />
        <Checkbox values={[]} genericKey="menu" dynamicKey={true} name="access" label='Access' options={RolesAccessOptions} />
      </Form>
    </div>
  )
}

export default RolesPage
