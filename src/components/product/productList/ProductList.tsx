import axios from "axios";
import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import { electronicsItems } from "../../home/electronics/Electronics";
import styles from "./ProductList.module.scss"

const ProductList = () => {
    const {category}=useParams();
    const [products, setProducts] = useState<electronicsItems[] | []>([]);
    const token = localStorage.getItem('accessToken');
    useEffect(() => {
        // api.get('http://localhost:3000/products?limit=5&category=Electronics', {
          axios.get(`https://nestjs-ecom.onrender.com/products?category=${category}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then(({ data }) => {
            console.log(data.data.data);
            setProducts(data.data.data)
          })
          .catch((error) => {
            console.error('There was an error!', error);
          });
      }, [])
  return (
    <div className="container mt-5">
        <div className={styles.productWrapper}>
            {products.map((i)=>(
              <Link to={`/product/${i.id}`} style={{ textDecoration: 'none' }}>
                <div key={i.id} className={styles.product}>
                     <div className={styles.img}><img src={i.featuredImageUrl} className="img-fluid"/></div>
            <div className={styles.desc}>
              <h6>{i.title}</h6>
              <p>Rs. {i.price}</p>
            </div>
                </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default ProductList