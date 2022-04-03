import React from 'react'
import { Link } from 'react-router-dom'
import ProductList from '../components/ProductList'
import {ProductType} from '../types/Product'

type ProductProps = {
  products: ProductType[]
}

const Products = (props: ProductProps) => {
  return (
    <div>
      <div className="bg-center text-2xl md:text-[38px] uppercase text-gray-100 bg-pink-500 text-center mb-6 py-5">
        DANH SÁCH SẢN PHẨM
      </div>
      {/* <nav className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark" id="sidenav-main">
        <hr className="horizontal light mt-0 mb-2" />
        <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">dashboard</i>
                </div>
                <span className="nav-link-text ms-1"></span>
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white " to="/admin/product">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">table_view</i>
                </div>
                <span className="nav-link-text ms-1"></span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="">
                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="material-icons opacity-10">receipt_long</i>
                </div>
                <span className="nav-link-text ms-1"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
      <ProductList products={props.products} />
    </div>

  )
}

export default Products