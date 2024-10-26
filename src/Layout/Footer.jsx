import React from "react";

const Footer = () => {
  return (
    <footer className="tj-footer-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="footer-logo-box">
              <a href="#">
                <img src="/img/logo/logo.png" alt />
              </a>
            </div>
            <div className="footer-menu">
              <nav>
                <ul>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="portfolio.html">Portfolios</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="copy-text">
              <p>
                © 2024 All rights reserved by{" "}
                <a href="#" target="_blank">
                  ThemeJunction
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
