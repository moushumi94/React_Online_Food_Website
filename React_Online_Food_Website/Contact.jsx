import React from 'react';

function Contact(){
    return(
      <div id="contact">
       <h1>BOOK YOUR TABLE</h1>
       <form>
       <input type="text" placeholder="Ful Name" />
       <input type="email" placeholder="Type your E-Mail" />
       <textarea placeholder="Write here......"></textarea>
       <input type="Submit" value="BOOK" />
       </form>
  </div>
    );
}

export default Contact;