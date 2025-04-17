import styles from "./hero.module.scss";
import heroImg from '../../../assets/image 2.png'
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
    <div className={styles.heroText}>
        <h5>Best Deal Online on smart watches</h5><br/>
        <h3>SMART WEARABLE.</h3><br/>
        <h5>UP to 80% OFF</h5>
    </div>
    <div className={styles.heroImage}>
        <img src={heroImg}/>
    </div>
    </div>
  )
}

export default Hero