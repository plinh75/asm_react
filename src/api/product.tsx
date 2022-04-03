import instance from './instance';
import { ProductType } from '../types/Product';
import { isAuthenticated } from '../ultis/localStorage';

const user = isAuthenticated()

export const list = () => {
    const url = `/product`;
    return instance.get(url)
}

export const add = (product:ProductType) => {
    const url = `/product/${user?.user._id}`;
    return instance.post(url, product, {
        headers: {
          "Authorization": `Bearer ${user?.token}`
        }
      })
}

export const remove = (_id:number) => {
    const url = `/product/${_id}`;
    return instance.delete(url)
}

export const read = (id:string|undefined) => {
    const url = `/product/${id}`;
    return instance.get(url)
}

export const update = (product:ProductType) => {
    const url = `product/${product._id}`;
    return instance.put(url, product)
}