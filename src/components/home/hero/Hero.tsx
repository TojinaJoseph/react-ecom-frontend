import styles from "./hero.module.scss";
import heroImg from '../../../assets/image 2.png'
const Hero = () => {
  return (
    <div className={`container ${styles.heroContainer}`}>
      <div className="row p-4 align-items-center">


        <div className={`col-md-5 ${styles.heroText}`}>
          <h5>Best Deal Online on smart watches</h5><br />
          <h3>SMART WEARABLE.</h3><br />
          <h5>UP to 80% OFF</h5>
        </div>
        <div className={`col-md-7 ${styles.heroImage}`}>
          <img src={heroImg} />
        </div>
      </div>
    </div>
  )
}

export default Hero