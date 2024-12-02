import SelectComponent from '../components/Select'
import Form from '../components/Form'
import { RolesAccessOptions, RolesMenuOptions, RolesSelectOptions } from '../config'
import Checkbox from '../components/CheckBox'
import TextInput from '../components/Text'

function RolesPage() {
  const onSubmit=(values:Record<string,string|string[]>)=>{
    console.log(values);
  }
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <TextInput name='userName' label='User Name' />
        <TextInput type='password' name='password' label='Pass Word' />
        <SelectComponent name="role" options={RolesSelectOptions} label="Role Name" />
        <SelectComponent name="menu" options={RolesMenuOptions} label="Menu" />
        <Checkbox values={[]} name="access" label='Access' options={RolesAccessOptions} />
      </Form>
    </div>
  )
}

export default RolesPage
