import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {ProductType} from '../types/Product'
import {read} from '../api/product'

type Props = {}

const ProductDetail = (props: Props) => {
  const {id} = useParams()
  const [product, setProduct] = useState<ProductType>()
  
  useEffect(() =>{
    const getProduct = async () => {
      const {data} = await read(id)
      setProduct(data)
    }
    getProduct()
  }, [])
  
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <img className="img-fluid" src={product?.img} alt="" />
        </div>
        <div className="col-6">
          <h1>{product?.name}</h1>
          <p>{product?.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail