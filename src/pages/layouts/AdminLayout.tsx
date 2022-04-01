import React from 'react'
import { Outlet } from 'react-router-dom'
import NavAdmin from '../../components/admin/NavAdmin'
import FooterAdmin from '../../components/admin/FooterAdmin'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div className="g-sidenav-show  bg-gray-200">
      <NavAdmin />
      <Outlet />
      <FooterAdmin/>
    </div>
  )
}

export default AdminLayout