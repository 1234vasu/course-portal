import {Link} from "react-router-dom"
import "./Navbar.css"
import image from './assets/logo.jpeg'
function Navbar(){
   return(
       <nav className="main">
        <div className="img1">
        <img src={image}></img>
        </div>
        <div className="nav"> 

        <Link to="/">Home</Link>
        <Link to="/Studentdash">DashBoard</Link>
        <Link to="/Login">Login</Link >
        <Link to="/Student">Register</Link>
    </div>
    </nav>
   )
}
export default Navbar;