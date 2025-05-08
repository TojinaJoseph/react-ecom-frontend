import styles from "./electronics.module.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  const navigate = useNavigate();
  const [electronics, setElectronics] = useState<electronicsItems[] | []>([]);
  const token = localStorage.getItem("accessToken");
  const handleNavigation = (id: number) => {
    navigate(`product/${id}`);
  };
  useEffect(() => {
    axios
      .get(
        "https://nestjs-ecom.onrender.com/products?limit=5&category=Electronics",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data.data.data);
        setElectronics(data.data.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);
  return (
    <div className={`container mt-5 ${styles.electronicsContainer}`}>
      <p>
        Top deals on <span className="text-primary">Electronics</span>
      </p>{" "}
      <hr />
      <div className="row gap-3 justify-content-center">
        {electronics.map((i) => (
          <div
            className={`col-12 col-md-6 col-lg-3 col-xl-2 border text-center ${styles.box}`}
            key={i.id}
            onClick={() => handleNavigation(i.id)}
          >
            <div className={styles.img}>
              <img src={i.featuredImageUrl} className="img-fluid" />
            </div>
            <div className={styles.desc}>
              <h6>{i.title}</h6>
              <p>Rs. {i.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;
