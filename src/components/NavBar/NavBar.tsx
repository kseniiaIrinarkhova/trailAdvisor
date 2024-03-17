import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="nav-bar">
        <div className="logo"><Link to='/'><img src='/logo.png' alt="logo"/></Link></div>
        <Link to='/favorite'>My List</Link>
    </div>
  )
}

export default NavBar