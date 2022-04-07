import React from 'react'
import { ProductType } from '../types/Product'

type ProductListProps = {
    products: ProductType[]
}

const ProductList = ({ products }: ProductListProps) => {
    return (
        <div className="">
            <div className="row py-2">
                {products?.map(product => {
                    return (
                        <div className="col-3 key={index}">
                            <div className="card">
                                <div className='overflow-hidden'>
                                    <img src={product.img} className="card-img-top transition-transform duration-500 transform hover:scale-110" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <span className="block">{product.price}</span>
                                    <a href={`/product/${product._id}`} className="btn btn-primary">Chi tiết</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default ProductList