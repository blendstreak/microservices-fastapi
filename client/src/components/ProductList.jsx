import axiosClient from "../api"
import {useState, useEffect} from "react"
import Product from "./Product"

const ProductList = ({ products, setProducts }) => {
  // const [products, setProducts] = useState(null)

  async function getProducts(){
    try{
      const response = await axiosClient.get('/products')
      console.log(response)
      setProducts(response.data)
    } catch (error){
      console.error(error.message)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  if (products) {
    return (
      <ul className="mx-auto my-4">
        {
          products?.map((elm) => (
           <Product key={elm.id} data={elm}/> 
          ))
        }
      </ul>
    )
  }
  else{
    return <div className="text-lg font-bold mx-auto">Loading...</div>
  }
}

export default ProductList
