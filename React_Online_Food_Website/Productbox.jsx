import React from "react";


function Productbox(props){
    return(
        <div className="a-box">
         <div className="a-b-img">
           <img src={props.image} alt="" />
     </div>
     <div className="a-b-text">
        <h3>{props.title}</h3>
        <button className="productbox-button">Quick View</button>
        </div>
        </div>
    )
};

export default Productbox;