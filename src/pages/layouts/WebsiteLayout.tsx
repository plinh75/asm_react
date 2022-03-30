import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Slogan from '../../components/Slogan'
import Footer from '../../components/Footer'
import ProductList from '../../components/ProductList'


type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div className="container">
       <Header/>
       <Banner/>
       <Outlet/>
       <Slogan />
       <Footer/>
    </div>
  )
}

export default WebsiteLayout