import instance from './instance'
import { ProductType } from '../types/product'

export const create = (product: ProductType) => {
    const url = `/product`
    return instance.post(url, product)
}

export const list = () => {
    const url = `/product`
    return instance.get(url)
}

export const read = (id:number) => {
    const url = `/product/${id}`
    return instance.get(url)
}

export const remove = (id:number) => {
    const url = `/product/${id}`
    return instance.delete(url)
}

export const update = (product: ProductType) => {
    const url = `/product/${product.id}`
    return instance.post(url, product)
}