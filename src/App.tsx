import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import { list, read, remove, update } from './api/product'
import { ProductType } from './types/Product'

import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'
import ProductList from './components/ProductList'
import ProductDetail from './pages/ProductDetail'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import ProductAdmin from './pages/admin/ProductAdmin'

function App() {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(()=>{
    const getProducts = async () => {
      const {data} = await list()
      setProducts(data)
    }
    getProducts()
  }, [])

  //xóa sp
  const onHandleRemove = async (id:number) => {
    remove(id)
    setProducts(products.filter(item => item.id !== id))
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout/>}>
          <Route index element={<ProductList products={products} />} />
          <Route path='/product/:id' element={<ProductDetail />}/>
        </Route>

        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />

        //admin
        <Route path='admin' element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard"/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product"> 
            <Route index element={<ProductAdmin products={products} onRemove={onHandleRemove} />} />
            
          </Route>
        </Route>

      </Routes>
    </div>
  )
}

export default App
