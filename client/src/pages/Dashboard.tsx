import React from 'react'
import SideBar from '../components/SideBar'
import Logout from '../components/Logout'
import SelectComponent from '../components/Select'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      dfsd
      <SideBar />
      <Logout />
      <Outlet />
      {/* <SelectComponent /> */}
    </div>
  )
}

export default Dashboard
