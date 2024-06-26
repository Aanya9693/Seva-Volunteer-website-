// About.js

import React from 'react';
import "./contact.css";
// import Footer from "../../components/footer";
import Footer from '../../components/footer/footer';

export default function About() {
  
  const Img = "https://volunteerforindia.com/wp-content/uploads/2021/01/about-cover.jpg"
  return (
    <div className="aboutus">
      <div className="image-container">
          <img className='aboutImg' src={Img} alt=''></img>
      </div>
      <Footer/>
    </div>
  );
}
