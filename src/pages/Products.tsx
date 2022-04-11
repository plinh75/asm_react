import React from 'react'
import { Link } from 'react-router-dom'
import ProductList from '../components/ProductList'
import { ProductType } from '../types/Product'

type ProductProps = {
  products: ProductType[]
}

const Products = (props: ProductProps) => {
  return (

    <div className="">
      <div className="bg-center text-2xl md:text-[38px] uppercase text-gray-100 bg-pink-500 text-center mb-6 py-5">
        DANH SÁCH SẢN PHẨM
      </div>
      
      <div className="grid grid-cols-12 pb-5 gap-4">
        <div className="col-span-4">
          <nav className="navbar navbar-vertical bg-pink-500 border border-radius-lg">
            <div className="container-fluid">
              <a className="navbar-brand text-white" href="/product">DANH MỤC SẢN PHẨM</a>
              <button className="navbar-toggler bg-secondary bg-gradient bg-opacity-50" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Son Givenchy</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Son 3CE</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Son MAC</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Son YSL</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Son Channel</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-span-8">
          <ProductList products={props.products} />
        </div>
      </div>


    </div>


  )
}

export default Products