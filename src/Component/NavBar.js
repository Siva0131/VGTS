import React from "react";

export default function NavBar() {
  return (


    <nav>
      <div class="nav-wrapper">
       
        <img src={require('../Images/homeIcon.jpeg')} class="brand-logo"/>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="./">Home</a></li>
          <li><a href="./aboutus">About Us</a></li>
        </ul>
      </div>
    </nav>


  )
}
