import { Link } from "react-router-dom";

const Navbar = () => {
    const handleLogOut=()=>{
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('role');
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
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar