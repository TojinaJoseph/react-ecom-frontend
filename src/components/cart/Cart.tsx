import { useEffect, useState } from "react"
import api from "../../../api/axiosInstance";
import { useParams } from "react-router-dom";
import { product } from "../product/productInfo/ProductInfo";
export interface cartItem{
    id:number,
    price:number,
    product:product,
    quantity:number
}

const Cart = () => {
    const {id}=useParams();
    const [items,setItems]=useState<cartItem[]|[]>([])
    const userId=id&&parseInt(id);
    const token=localStorage.getItem('accessToken')
    useEffect(()=>{
            api.get(`https://nestjs-ecom.onrender.com/cart?userid=${userId}`, {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  })
                    .then(({ data }) => {
                      console.log(data.data);
                      setItems(data.data.items);
                    })
                    .catch((error) => {
                      console.error('There was an error!', error);
                    });
    },[])
  return (
    <div className="container pt-5">
        {items.length<=0&& <h5 className="text-center">No items in cart</h5>}
        {items.length>0&& 
        <>
        <div className="table-responsive">
  <table className="table align-middle">
    <thead>
      <tr>
      <th scope="col">Item</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
      </tr>
    </thead>
    <tbody>
        {items.map((i)=>(
 <tr key={i.id}>
  <td>
  <div className="d-flex gap-3">
    <img src={i.product.featuredImageUrl} width={200}/>
    <div>
        <p className="text-primary">{i.product.category}</p><br/>
        <h6>{i.product.title}</h6>
    </div>
    </div>
    </td>
      <td>{i.product.price}</td>
      <td>{i.quantity}</td>
      <td>{i.price}</td>
</tr>
        ))}
     
   
    </tbody>
  </table>
</div>
 <div className="d-flex justify-content-end">
 <button className="btn btn-success">Checkout</button>

</div>
</>
}

    </div>
  )
}

export default Cart