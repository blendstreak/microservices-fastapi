import { useState } from "react"
import axiosClient from "../api"
const AddProduct = ({products, setProducts}) => {

  const [form, setForm] = useState({
    name: '',
    price: '',
    quantity: '',
  })

  function handleChange(e){
    const {name, value} = e.target
    setForm({
      ...form, [name]: value
    })

  }

  async function handleSubmit(e){
    e.preventDefault()
    try {
      const postdata = await axiosClient.post('/products', form)
      console.log(postdata.data)
      const obj = postdata.data
      const elm = {
        id: obj.pk,
        name: obj.name,
        price: obj.price,
        quantity: obj.quantity
      }
      setProducts([...products, elm])
      setForm({
        name:'',
        price: '',
        quantity: '',
      })
    } catch (err) {
        console.error(err.message)
    }
  }

  return (
    <div className="mx-auto max-w-[320px]">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 p-2">
          <div className="">
            <label className="text-xs text-neutral-600 font-semibold" htmlFor="name">NAME OF THE PRODUCT</label>
            <input className="input-field" id="name" name="name" type="text" placeholder="Name of the product" value={form.name} onChange={handleChange}/>
          </div>
          
          <div>
            <label className="text-xs text-neutral-600 font-semibold" htmlFor="price">PRICE</label>
            <input className="input-field" type="number" min="0" name="price" id="price" placeholder="Price" value={form.price} onChange={handleChange}/>
          </div>
          <div>
            <label className="text-xs text-neutral-600 font-semibold" htmlFor="quantity">QUANTITY</label>
            <input className="input-field" type="number" min="0" name="quantity" id="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange}/>
          </div>
         
          <div>
            <input type="submit" className={form.name && form.price && form.quantity ? "rounded-lg border border-1 px-4 py-2 hover:cursor-pointer bg-green-400 text-white" : "rounded-lg border border-1 px-4 py-2" }/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddProduct
