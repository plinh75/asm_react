import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import WebsiteLayout from './pages/layouts/WebsiteLayout'
import { ProductType } from './types/Product'
import ProductList from './components/ProductList'
import { list } from './api/product'
import ProductDetail from './pages/ProductDetail'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(()=>{
    const getProducts = async () => {
      const {data} = await list()
      setProducts(data)
    }
    getProducts()
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout/>}>
          <Route index element={<ProductList products={products} />} />
          <Route path='/product/:id' element={<ProductDetail />}/>
        </Route>

        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
      </Routes>
    </div>
  )
}

export default App
