import { useEffect } from "react";
import { useParams } from "react-router-dom"
import api from "../../../../api/axiosInstance";

export const ProductInfo = () => {
    const {id}=useParams();
    const token = localStorage.getItem('accessToken');
    useEffect(()=>{
        api.get(`https://nestjs-ecom.onrender.com/products/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then(({ data }) => {
              console.log(data.data);
              
            })
            .catch((error) => {
              console.error('There was an error!', error);
            });
    },[])
  return (
    <div>ProductInfo</div>
  )
}
