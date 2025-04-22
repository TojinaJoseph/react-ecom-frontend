import styles from "./electronics.module.scss";
import { useEffect, useState } from "react";
import api from "../../../../api/axiosInstance";

export interface electronicsItems {
  category: string;
  description: string;
  featuredImageUrl: string;
  id: number;
  price: number;
  rating: number;
  slug: string;
  title: string;

}
const Electronics = () => {
  const [electronics, setElectronics] = useState<electronicsItems[] | []>([]);
  const token = localStorage.getItem('accessToken');
  useEffect(() => {
    api.get('http://localhost:3000/products?limit=5&category=Electronics', {
      // api.get('https://nestjs-ecom-api.onrender.com/products?limit=5&category=Electronics', {

      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(({ data }) => {
        console.log(data.data.data);
        setElectronics(data.data.data)
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, [])
  return (
    <div className={styles.electronicsContainer}>
      <p>Top deals on <span className="text-primary">Electronics</span></p> <hr />
      <div className={styles.fiveBoxContainer}>
        {electronics.map((i) => (
          <div className={styles.box} key={i.id}>
            <div className={styles.img}><img src={i.featuredImageUrl} /></div>
            <div className={styles.desc}>
              <h6>{i.title}</h6>
              <p>Rs. {i.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Electronics