import React from "react";
import footerlogo from "../img/footer-logo.png";
import logo from '../img/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
       <div className="row">
        <div className="col-lg-5 col-md-8 mx-auto">
        <div className="footerBox" >
          <img src={logo} alt="" />
          <p className="subscribe">Subscribe to get our Newsletter</p>
          <div className="searchField">
            
              <input type="text" class="form-control" placeholder="Your Email"/>
              <button className="blue">Subscribe</button>
            
          </div>
          <div className="links">
            <a href="#">Careers</a>
            <a className="bar"> | </a>
            <a href="#">Privacy policy</a>
            <a className="bar"> | </a>
            <a href="#">Terms & Conditions</a>
          </div>
          <p className="copyright">© 2023 AI SalesScript Pro Inc.</p>
        </div>
        </div>
       </div>
      </div>
    </footer>
  );
};

export default Footer;
