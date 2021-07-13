import  React from "react";
import headerimage from "../photos/banner.png";

function Header() {
  return(
   <div id="main">
       <div className="header-heading">
       <h3>It's Great Time For A Good Taste Of <br /> Chinese Food</h3>
         <h1><span>CHINESE</span> FOR <br /> THE WEEK</h1>
         <p className="details">PURITY IS OUR PRIORITY.
         </p>
         <a href="#" className="header-btn">Order</a>
       </div>
       <div className="header-image">
               <img src={headerimage} alt="" />
           </div>
   </div>
  );
}

export default Header;