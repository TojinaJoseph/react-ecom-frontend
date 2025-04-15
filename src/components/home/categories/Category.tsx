import "./Category.css"
import watch from '../../../assets/watch.png';
import electronics from "../../../assets/electronics.png";
import mobiles from "../../../assets/mobile.png";
import accessories from "../../../assets/accessories.png";
import cosmetics from "../../../assets/cosmetics.png";
import decor from "../../../assets/decor.png";
import furniture from "../../../assets/furniture.png";


const Category = () => {
  return (
    <div className="categoryContainer">
        <p>Shop by <span className="text-primary">Categories</span></p> <hr/>
        <div className="sevenBoxContainer">
  <div className="categoryBox">
    <div className="imgCat"><img src={watch}/></div>
    <div className="catName">
        <h6>Watches</h6>
    </div>
  </div>
  <div className="categoryBox">
    <div className="imgCat"><img src={cosmetics}/></div>
    <div className="catName">
    <h6>Cosmetics</h6>      
    </div>
  </div>
  <div className="categoryBox">
    <div className="imgCat"><img src={mobiles}/></div>
    <div className="catName">
    <h6>Mobiles</h6>   
    </div>
  </div>
  <div className="categoryBox">
    <div className="imgCat"><img src={electronics}/></div>
    <div className="catName">
    <h6>Electronics</h6>   
    </div>
  </div>
  <div className="categoryBox">
    <div className="imgCat"><img src={accessories}/></div>
    <div className="catName">
    <h6>Accessories</h6>      
    </div>
  </div>
  <div className="categoryBox">
    <div className="imgCat"><img src={decor}/></div>
    <div className="catName">
    <h6>Decor</h6>      
    </div>
  </div>
  <div className="categoryBox">
    <div className="imgCat"><img src={furniture}/></div>
    <div className="catName">
    <h6>Furniture</h6>       
    </div>
  </div>
</div>
    </div>
  )
}

export default Category