import  React from "react";

import footerimage from "../photos/apple.png";
import footerimage1 from "../photos/play_store.png";

function Footer(){
    return(
        
        <div id="footer">
        <div className="col_details">
              <div className="col">
               <ul>
                   <li><h2>COMPANY</h2></li>
                   <li><h4>Who We Are</h4></li>
                   <li><h4>Blog</h4></li>
                   <li><h4>Careers</h4></li>
                   <li><h4>Report Fraud</h4></li>
                   <li><h4>Contact</h4></li>
                   <li><h4>Financial Information</h4></li>
               </ul>
              </div>
              <div className="col">
               <ul>
                   <li><h2>FOR FOODIES</h2></li>
                   <li><h4>Code of Conduct</h4></li>
                   <li><h4>Community</h4></li>
                   <li><h4>Blogger Help</h4></li>
                   <li><h4>Mobile Apps</h4></li>
               </ul>
              </div>
              <div className="col">
               <ul>
                   <li><h2>FOR RESTAURANTS</h2></li>
                  <li><h4>Add restaurant</h4></li>
                  <li><h4>Business App</h4></li>
                  <li><h4>Restaurant Widgets</h4></li>
                  <li><h4>Products for Businesses</h4></li>
               </ul>
              </div>
              
              <div className="col">
               <ul>
                   <li><h2>FOR YOU</h2></li>
                   <li><h4>Privacy</h4></li>
                   <li><h4>Terms</h4></li>
                   <li><h4>Security</h4></li>
                   <li><h4>Sitemap</h4></li>
               </ul>
              </div>
              <div className="col-img">
               <ul>
                   <li><h3>SOCIAL LINKS</h3></li>
                   
                   <li><img src={footerimage} alt="" /></li>
                   <li><img src={footerimage1} alt="" /></li>
                   
               </ul>
              </div>
              
</div><hr />
             <div className="copyright">
 All trademarks are properties of their respective owners. 2008-2021 © Chinese Food™ Ltd. All rights reserved.
 </div>
        </div>


        );
    }

export default Footer;