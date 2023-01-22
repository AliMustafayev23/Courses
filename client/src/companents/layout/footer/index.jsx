import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerBody">
        <div className="footerBodyLeft">
          <Link to="/">
            <i className="fa-sharp fa-solid fa-book-open fa-2x"></i>
            <h2>Courses</h2>
          </Link>
          <p>
            The automated process starts as soon as your clothes go into the
            <br />
            machine.
          </p>
          <div className="icons">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-pinterest-p"></i>
          </div>
        </div>
        <div>
          <b>
            <h2>Our solutions</h2>
          </b>
          <Link to="/">Design & creatives</Link>
          <Link to="/">Telecommunication</Link>
          <Link to="/">Restaurant</Link>
          <Link to="/">Programing</Link>
          <Link to="/">Architecture</Link>
        </div>
        <div>
          <b>
            <h2>Support</h2>
          </b>
          <Link to="/">Design & creatives</Link>
          <Link to="/">Telecommunication</Link>
          <Link to="/">Restaurant</Link>
          <Link to="/">Programing</Link>
          <Link to="/">Architecture</Link>
        </div>
        <div>
          <b>
            <h2>Company</h2>
          </b>
          <Link to="/">Design & creatives</Link>
          <Link to="/">Telecommunication</Link>
          <Link to="/">Restaurant</Link>
          <Link to="/">Programing</Link>
          <Link to="/">Architecture</Link>
        </div>
      </div>

      <i className="footerEnd">Copyright ©2023 All rights reserved</i>
    </div>
  );
};

export default Footer;
