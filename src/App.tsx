import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import { list, remove, update, add } from './api/product'
import { ProductType } from './types/Product'

import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'
import ProductList from './components/ProductList'
import ProductDetail from './pages/ProductDetail'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import ProductAdmin from './pages/admin/ProductAdmin'
import ProductEdit from './pages/ProductEdit'
import ProductAdd from './pages/ProductAdd'
import PrivateRouter from './components/PrivateRouter'

function App() {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list()
      setProducts(data)
    }
    getProducts()
  }, [])

  //xóa sp
  const onHandleRemove = async (id: number) => {
    remove(id)
    setProducts(products.filter(item => item.id !== id))
  }
  //thêm sp
  const onHandleAdd = async (product: any) => {
    const {data} = await add(product);
    setProducts([...products, data]);
  }
  //sửa sp
  const onHandleUpdate = async (product: ProductType) => {
    try {
       const {data} = await update(product);
       setProducts(products.map(item => item.id === data.id ? product : item))
    } catch (error) {
      
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<ProductList products={products} />} />
          <Route path='/product/:id' element={<ProductDetail />} />
        </Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        //admin
        <Route path='admin' element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product">
            <Route index element={<ProductAdmin products={products} onRemove={onHandleRemove} />} />
            <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
            {/* <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} /> */}
          </Route>
        </Route>

      </Routes>
    </div>
  )
}

export default App
