import React from 'react';
import './footer.css'; // Import your CSS file

export default function Footer() {
  return (
    <footer className='footer'>
    <div class="container">
    <h2 className='heading'>Sign up for our newsletter</h2>
    <form action="/put">
      <div class="row">
        <div class="input-field">
          <input type="text" id="email" placeholder="Email address" required />
        </div>
        <div class="button">
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </form>
  </div>
  <div className="sidebarItem">
  <span className="sidebarTitle">FOLLOW US</span>
  <div className="sidebarSocial">
  <i className="sidebarIcon fab fa-facebook-square"></i>
  <i className="sidebarIcon fab fa-instagram-square"></i>
  <i className="sidebarIcon fab fa-pinterest-square"></i>
  <i className="sidebarIcon fab fa-twitter-square"></i>
  </div>
</div>

      <div className='footer-text'>
        &copy; {new Date().getFullYear()} Copyright:
        <a href='https://seva.com/'> Seva.com</a>
      </div>
    </footer>
  );
}
