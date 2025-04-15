import "./hero.css";
import heroImg from '../../../assets/image 2.png'
const Hero = () => {
  return (
    <div className="heroContainer">
    <div className="heroText">
        <h5>Best Deal Online on smart watches</h5><br/>
        <h3>SMART WEARABLE.</h3><br/>
        <h5>UP to 80% OFF</h5>
    </div>
    <div className="heroImage">
        <img src={heroImg}/>
    </div>
    </div>
  )
}

export default Hero