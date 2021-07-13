import React from "react";

import Productbox from "./Productbox";
import pimage1 from "../photos/food1.jpg";
import pimage2 from "../photos/food2.jpg";
import pimage3 from "../photos/food3.jpg";
import pimage4 from "../photos/food4.jpg";
import pimage5 from "../photos/food5.jpg";
import pimage6 from "../photos/food6.jpg";

function Products(){
    return(
        <div id="products">
          <h1>CHOOSE & ENJOY</h1>
          <p>The taste of each Chinese Food.</p>
         <div className="a-container">
             <Productbox image={pimage1} title="Quick Noodles"/>
             <Productbox image={pimage2} title="Hot & Sour Soup"/>
             <Productbox image={pimage3} title="Dim Sums"/>
            </div>
            <div className="b-container">
             <Productbox image={pimage4} title="Szechwan Chilli Chicken"/>
             <Productbox image={pimage5} title="Stir Fried Tofu with Rice"/>
             <Productbox image={pimage6} title="Shitake Fried Rice with Water Chesnuts"/>
         </div>
        </div>
    )
};

export default Products;