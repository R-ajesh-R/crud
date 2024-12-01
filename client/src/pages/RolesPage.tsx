import React from 'react'
import SideBar from '../components/SideBar'
import Logout from '../components/Logout'
import SelectComponent from '../components/Select'
import Form from '../components/Form'

function RolesPage() {
  return (
    <div>
      <Form>
        <SelectComponent options={[{value:'Admin',displayValue:'Admin'},{value:'User',displayValue:'User'}]} label='Role Name' />
      </Form>
    </div>
  )
}

export default RolesPage
