import React from "react";
import aboutimage from "../photos/about.png";
function About(){
    return(
        <div id="about">
           
           <div className="about-text">
               <h3>About Us...</h3>
               <h1>Welcome To Chinese World</h1>
               <p>Chinese food, rich and colorful, has diversified color, aromatic flavor, and excellent taste as
                its main features. With these three characteristics,it is not only tasty but also a work 
                 of art for people to appreciate.</p>
                <button>Read More</button>
           </div>
           <div className="about-image">
               <img src={aboutimage} alt="" />
           </div>
        </div>
    );
}

export default About;