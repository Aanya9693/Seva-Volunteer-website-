// About.js

import React from 'react';
import "./about.css";
import Img from "../../static/about.jpg"
import Footer from '../../components/footer/footer';
// import Footer from "../../components/footer/Footer"

export default function About() {
  return (
    <div className="aboutus">
      <h1 className='aboutheading'>About Us</h1>
      <img className='aboutImg' src={Img} alt=''/>
      <p className='para1'>Seva was initiated in 2023 when a group of friends came together with the intention of giving back to the society. They were inspired by the thought and philosophy of Peter Senge, the founder of the Society for Organizational Learning who has propagated that “sustainability, social equality and the environment are now business problems…” and corporate leaders can’t expect governments to solve them alone.</p>
      <p className='para2'>What triggered these thoughts was the liberalisation of the Indian economy in the 2021’s which brought with it immense opportunities. Business revived, and India became not just a market, but also an investment prospect for the developed world. Disposable incomes and early settlements became a living reality for the working middle-class. For the first time in India, professionals could think beyond making a living, and contribute towards the society.</p>
      <Footer/>
      
    </div>
  );
}
