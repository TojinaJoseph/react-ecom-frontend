import styles from "./Footer.module.scss"
import phnsvg from "../../assets/phone.svg";
import watsapp from "../../assets/whatsapp-svgrepo-com.svg";
const Footer = () => {
  return (
    <div>
        <section className={styles.footer}>
       <div className="container">
        <div className={styles.footerLinks}>
          <div className={styles.footerlink}>
            <div className={styles.contactUs}>
              <h1>Mega Mart</h1> <br/>
              <ul>
                <li><div className={styles.info}>
                     <img width={15} src={watsapp}/>
                     <p>Whats app
                      <br/>
                      +1 202-918-2132 <br/></p>
                  </div>
                  </li>
                <li>
                <div className={styles.info}>
                     <img width={15} src={phnsvg}/>
                     <p>Call Us <br/>
                     +1 202-918-2132
                     </p>
                  </div>
                </li>
                <li>
                <div className={styles.info}>
                     <img width={15}/>
                     <p>sales@megamart.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className={styles.footerlink}>
            <div className={styles.navigation}>
              <h3>Navigation</h3>
              <div className={styles.navFooter}>
                <ul>
                  <li><a>Home</a></li>
                  <li><a>About Us</a></li>
                  <li><a>Career</a></li>
                  <li><a>Contact</a></li>
                  <li><a>Blogs</a></li>
                </ul>
              </div>
            </div>
          </div> */}
          <div className={styles.footerlink}>
          <div className={styles.navigation}>
              <h3>Most popular categories</h3>
              <div className={styles.navFooter}>
                <ul>
                  <li><a>Watches</a></li>
                  <li><a>Cosmetics</a></li>
                  <li><a>Electronics</a></li>
                  <li><a>Decor</a></li>
                  <li><a>Accessories</a></li>
                  <li><a>Furniture</a></li>
                  <li><a>Mobiles</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footerlink}> <div className={styles.navigation}>
              <h3>Customer Services</h3>
             <div className={styles.navFooter}>
                <ul>
                  <li><a>Terms & Conditions</a></li>
                  <li><a>Privacy Policy</a></li>
                </ul>
                </div>
            </div></div>
        </div>
       
       </div>
      
      </section>
      <section className={styles.secondFooter}>
      
      <div className="container-fluid">
      <hr/>
       <p>2025 © Copyright - All Rights Reserved.</p>
      </div>
   
   </section>
    </div>
  )
}

export default Footer