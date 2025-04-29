import watch from '../../../assets/watch.png';
import electronics from "../../../assets/electronics.png";
import mobiles from "../../../assets/mobile.png";
import accessories from "../../../assets/accessories.png";
import cosmetics from "../../../assets/cosmetics.png";
import decor from "../../../assets/decor.png";
import furniture from "../../../assets/furniture.png";
import styles from "./Category.module.scss"
import { useNavigate } from 'react-router-dom';


const Category = () => {
  const navigate=useNavigate()
  const handleCategoryList=(category:string)=>{
       navigate(`/productlist/${category}`)  
  }
  return (
    <div className={`container py-4 ${styles.categoryContainer}`}>
        <p>Shop by <span className="text-primary">Categories</span></p> <hr/>
        <div className={`d-flex flex-wrap justify-content-center gap-4 ${styles.sevenBoxContainer}`}>      
  <div className={`d-flex flex-column align-items-center ${styles.categoryBox}`} onClick={()=>handleCategoryList('Watches')}>
    <div className={styles.imgCat}><img src={watch}/></div>
    <div className={styles.catName}>
        <h6>Watches</h6>
    </div>
  </div>
  <div className={`d-flex flex-column align-items-center ${styles.categoryBox}`} onClick={()=>handleCategoryList('Cosmetics')}>
    <div className={styles.imgCat}><img src={cosmetics}/></div>
    <div className={styles.catName}>
    <h6>Cosmetics</h6>      
    </div>
  </div>
  <div className={`d-flex flex-column align-items-center ${styles.categoryBox}`} onClick={()=>handleCategoryList('Mobiles')}>
    <div className={styles.imgCat}><img src={mobiles}/></div>
    <div className={styles.catName}>
    <h6>Mobiles</h6>   
    </div>
  </div>
  <div className={`d-flex flex-column align-items-center ${styles.categoryBox}`} onClick={()=>handleCategoryList('Electronics')}>
    <div className={styles.imgCat}><img src={electronics}/></div>
    <div className={styles.catName}>
    <h6>Electronics</h6>   
    </div>
  </div>
  <div className={`d-flex flex-column align-items-center ${styles.categoryBox}`} onClick={()=>handleCategoryList('Accessories')}>
    <div className={styles.imgCat}><img src={accessories}/></div>
    <div className={styles.catName}>
    <h6>Accessories</h6>      
    </div>
  </div>
  <div className={`d-flex flex-column align-items-center ${styles.categoryBox}`} onClick={()=>handleCategoryList('Decor')}>
    <div className={styles.imgCat}><img src={decor}/></div>
    <div className={styles.catName}>
    <h6>Decor</h6>      
    </div>
  </div>
  <div className={`d-flex flex-column align-items-center ${styles.categoryBox}`} onClick={()=>handleCategoryList('Furniture')}>
    <div className={styles.imgCat}><img src={furniture}/></div>
    <div className={styles.catName}>
    <h6>Furniture</h6>       
    </div>
  </div>
</div>
    </div>
  )
}

export default Category