import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {ProductType} from '../types/product'
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

    </div>
  )
}

export default ProductDetail