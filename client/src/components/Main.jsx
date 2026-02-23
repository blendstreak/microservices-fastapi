import { useState } from 'react'
import AddProduct from './AddProduct'
import ProductList from './ProductList'

export default function Main() {
  const [products, setProducts] = useState([])

  return (
  
    <div>
      <AddProduct products={products} setProducts={setProducts}/>
      <ProductList products={products} setProducts={setProducts}/>
    </div>
  )
}

