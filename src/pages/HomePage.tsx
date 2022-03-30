import React from 'react'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
        <Banner />
        <ProductList />
    </div>
  )
}

export default HomePage