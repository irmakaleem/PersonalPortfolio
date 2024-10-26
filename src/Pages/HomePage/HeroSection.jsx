import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
const HeroSection = () => {
  return (
    <section className="hero-section d-flex align-items-center" id="intro">
      <div className="intro_text">
        <svg viewBox="0 0 1320 300">
          <text x="50%" y="50%" textAnchor="middle">
            HI
          </text>
        </svg>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="hero-content-box">
              <span className="hero-sub-title">I am Umer Khan </span>
              <h1 className="hero-title">Software Engineer</h1>
              {/* <h1 className="hero-title">
                Web Developer +<br />
                UX Designer
              </h1> */}
              <div className="hero-image-box d-md-none text-center">
                {/* for accessing anything in the public folder we only use / before the folder or file name */}
                <img src="/img/hero/me.png" alt />
              </div>
              <p className="lead">
                I design and develop efficient, scalable software solutions that
                bring ideas to life through modern web technologies.
              </p>
              <div className="button-box d-flex flex-wrap align-items-center">
                <a href="/omerkhan.pdf" className="btn tj-btn-secondary">
                  Download CV <FaDownload />
                </a>
                <ul className="ul-reset social-icons">
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/in/omer-khan-7998a8266/">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/omerkhan7210">
                      <FaGithub />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <div className="hero-image-box text-center">
              <img src="/img/hero/me.png" alt />
            </div>
          </div>
        </div>
        <div className="funfact-area">
          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                <div className="number">
                  <span className="odometer" data-count={14}>
                    3
                  </span>
                </div>
                <div className="text">
                  Years of <br />
                  Experience
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                <div className="number">
                  <span className="odometer" data-count={50}>
                    20
                  </span>
                  +
                </div>
                <div className="text">
                  Project <br />
                  Completed
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                <div className="number">
                  <span className="odometer" data-count="1.5">
                    1
                  </span>
                  K
                </div>
                <div className="text">
                  Happy <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                <div className="number">
                  <span className="odometer" data-count={14}>
                    3
                  </span>
                </div>
                <div className="text">
                  Years of <br />
                  Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
