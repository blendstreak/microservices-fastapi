export default function Product({ data }){
  return (
    <li className="grid grid-cols-2 md:grid-cols-4 gap-5 items-center py-2 px-4 border-b w-full">
      
      <div className="text-left">
        <p className="text-xs text-neutral-500 uppercase font-bold">ID</p>
        <p>{data.id}</p>
      </div>

      <div className="text-right ">
        
        <p className="text-xs text-neutral-500 uppercase font-bold">Name</p>
        <p>
          {data.name}
        </p>
      </div>
      
      <div className="text-left md:text-center">
        
        <p className="text-xs text-neutral-500 uppercase font-bold">Price</p>
        <p>
          ₹{data.price}
        </p>
      </div>
      
      <div className="text-left md:text-right">
        
        <p className="text-xs text-neutral-500 uppercase font-bold">Quantity</p>
        <p>
          {data.quantity}
        </p>
      </div>
    </li>
  )
}
