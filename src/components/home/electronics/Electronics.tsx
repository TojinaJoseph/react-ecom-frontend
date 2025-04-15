import "./electronics.css";
import phon1 from "../../../assets/phon1.png";
import phon2 from "../../../assets/phon2.png";
import phon3 from "../../../assets/phon3.png";
import phon4 from "../../../assets/phon4.png";
import phon5 from "../../../assets/phone5.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Electronics = () => {
    const [electronics,setElectronics]=useState([]);
    const token = localStorage.getItem('accessToken');
    useEffect(()=>{
        axios.get('http://localhost:3000/products',{
            headers: {
                Authorization: `Bearer ${token}`,
              },
        })
         .then(({ data }) => {
            console.log(data.data);
           setElectronics(data.data)
        })
        .catch((error) => {
            console.error('There was an error!', error);
        });
    },[])
  return (
    <div className="electronicsContainer">
        <p>Top deals on <span className="text-primary">Electronics</span></p> <hr/>
        <div className="fiveBoxContainer">
  <div className="box">
    <div className="img"><img src={phon1}/></div>
    <div className="desc">
        <h6>Galaxy s22 Ultra</h6>
        <p>Rs.32999</p>
    </div>
  </div>
  <div className="box">
    <div className="img"><img src={phon2}/></div>
    <div className="desc">
        <h6>Galaxy s22 Ultra</h6>
        <p>Rs.32999</p>
    </div>
  </div>
  <div className="box">
    <div className="img"><img src={phon3}/></div>
    <div className="desc">
        <h6>Galaxy s22 Ultra</h6>
        <p>Rs.32999</p>
    </div>
  </div>
  <div className="box">
    <div className="img"><img src={phon4}/></div>
    <div className="desc">
        <h6>Galaxy s22 Ultra</h6>
        <p>Rs.32999</p>
    </div>
  </div>
  <div className="box">
    <div className="img"><img src={phon5}/></div>
    <div className="desc">
        <h6>Galaxy s22 Ultra</h6>
        <p>Rs.32999</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default Electronics