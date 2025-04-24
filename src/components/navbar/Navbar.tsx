import { Link, useNavigate } from "react-router-dom";
import cart from "../../assets/cart-shopping-svgrepo-com.svg";
import profile from "../../assets/profile-circle-svgrepo-com.svg";
import styles from "./Navbar.module.scss";
import { jwtDecode } from "jwt-decode";
const Navbar = () => {
  const access=localStorage.getItem('accessToken');
  let userId:string|undefined;
  if(access){
    userId = jwtDecode(access).sub;
    console.log(userId)
  }
      
  const navigate=useNavigate()
  const userRole=localStorage.getItem('role');
    const handleLogOut=()=>{
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('role');
        navigate("/")
    }
    const goToCart=()=>{
      
      navigate(`/cart/${userId}`)
    }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-xxl-5">
  <div className="container">
    <a className="navbar-brand text-primary" href="#">MegaMart</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        {!userRole &&      
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </a>
           <ul className="dropdown-menu">
           <Link className="dropdown-item" to="/signup">Sign Up</Link>
           <Link className="dropdown-item" to="/signin">Sign In</Link>
           <li><hr className="dropdown-divider"/></li>
           <li><a className="dropdown-item" onClick={handleLogOut}>Sign Out</a></li>
         </ul>        
        </li>}
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
      
      
      <div className="d-flex align-items-center gap-3 mx-2">
      
      <img src={cart} width={30} onClick={goToCart}/>
      {userRole && 
      // <img src={profile} width={30}/>
      
<div className="dropdown">
  <img src={profile} width={30} data-bs-toggle="dropdown" aria-expanded="false" role="button" className="dropdown-toggle"/>
  <ul className={`dropdown-menu dropdown-menu-end dropdown-menu-xs-start mt-2 ${styles.customDropdown}`}>
    <li><a className="dropdown-item" href="#">Profile</a></li>
    <li><a className="dropdown-item" onClick={handleLogOut}>Sign out</a></li>
  </ul>
</div>
}
      </div>
      
     
    </div>
  </div>
</nav>
  )
}

export default Navbar