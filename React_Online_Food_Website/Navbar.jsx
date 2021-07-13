import  React, { useState } from "react";
import logo1 from "../photos/logo1.jpg";
import {Link} from "react-scroll";

function Navbar() {

    const [nav,setnav] = useState(false);
   
    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true);
        
    }else{
        setnav(false);
    }
}
 window.addEventListener("scroll", changeBackground);
    return(
   <nav className={nav ? "nav active" : "nav"}>
   <Link to ="main" className= "logo1" smooth={true} duration={2000}>
         <img src={logo1} alt="" />
       </Link>
       <input type="checkbox" className="menu-btn" id="menu-btn" />
       <label className="menu-icon" for="menu-btn">
           <span className="nav-icon"></span>
       </label>
       <ul className="menu">
          <li> <Link activeclass="active" to="main" spy={true} smooth={true} duration={2000}>Header</Link></li>
          <li> <Link activeclass="active" to="products" spy={true} smooth={true} duration={2000}>Products</Link></li>
           <li> <Link activeclass="active" to="about" spy={true} smooth={true} duration={2000}>About</Link></li>
          <li> <Link activeclass="active" to="contact" spy={true} smooth={true} duration={2000}>Contact</Link></li>
       </ul>
   </nav>
  );
}

export default Navbar;