import React from 'react'
import { Outlet } from 'react-router-dom'
import NavAdmin from '../../components/admin/NavAdmin'
import FooterAdmin from '../../components/admin/FooterAdmin'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div className="">
      
      <Outlet />
      <FooterAdmin/>
    </div>
  )
}

export default AdminLayout