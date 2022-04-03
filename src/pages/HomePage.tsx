import React from 'react'
import Banner from '../components/Banner'
import Slogan from '../components/Slogan'
import {ProductType} from '../types/Product'
import ProductList from '../components/ProductList'

type HomePageProps = {
  products: ProductType[]
}

const HomePage = (props: HomePageProps) => {
  return (
    <div>
        <Banner />
        <ProductList products={props.products}/>
        <Slogan />
    </div>
  )
}

export default HomePage