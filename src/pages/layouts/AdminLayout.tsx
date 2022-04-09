import React from 'react'
import { Outlet } from 'react-router-dom'
import NavAdmin from '../../components/admin/NavAdmin'
import FooterAdmin from '../../components/admin/FooterAdmin'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div className="g-sidenav-show  bg-gray-200">
      <NavAdmin />
      <div className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <div className="container-fluid py-4">
          <Outlet/>
          <FooterAdmin/>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout