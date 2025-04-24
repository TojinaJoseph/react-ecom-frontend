import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import api from "../../../../api/axiosInstance";
export type product = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  featuredImageUrl: string,
  slug: string,
  rate?: number
} 
export const ProductInfo = () => {
    const {id}=useParams();
    const [product,setProduct]=useState<product|null>(null)
    const token = localStorage.getItem('accessToken');
    const addToCart=()=>{
      api.post(`https://nestjs-ecom.onrender.com/products/${id}/addToCart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(({ data }) => {
          if(data.data){
            alert("Item added to cart")
          }
        })
        .catch((error) => {
          console.error('There was an error!', error);
        });
    }

    useEffect(()=>{
        api.get(`https://nestjs-ecom.onrender.com/products/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then(({ data }) => {
              console.log(data.data);
              setProduct(data.data)
            })
            .catch((error) => {
              console.error('There was an error!', error);
            });
    },[])
  return (
    <div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-4">
            <div>
              <img src={product?.featuredImageUrl} className="img-fluid"/>
            </div>
          </div>
          <div className="col-md-8">
            <h6 className="text-primary">{product?.category}</h6><br/>
            <h4>{product?.title}</h4><br/>
            <p>{product?.description}</p><br/>
            <h5>Rs {product?.price}</h5><br/>
            <div className="d-flex gap-2">
              <span className="bg-light mr-2"><button className="btn btn-light">-</button>0<button className="btn btn-light">+</button></span>
              <button className="btn btn-success" onClick={addToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
