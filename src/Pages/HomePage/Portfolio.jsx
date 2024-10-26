import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="works-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                My Recent Works
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                We put your ideas and thus your wishes in the form of a unique
                web project that inspires you and you customers.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div
              className="portfolio-filter text-center wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="button-group filter-button-group">
                <button data-filter="*" className="active">
                  All
                </button>
                <button data-filter=".uxui">UX/UI</button>
                <button data-filter=".branding">Branding</button>
                <button data-filter=".mobile-app">Apps</button>
                <div className="active-bg" />
              </div>
            </div>
            <div className="portfolio-box wow fadeInUp" data-wow-delay=".6s">
              <div className="portfolio-sizer" />
              <div className="gutter-sizer" />
              <div className="portfolio-item branding">
                <div className="image-box">
                  <img src="/img/portfolio/2.jpg" alt />
                </div>
                <div className="content-box">
                  <h3 className="portfolio-title">Deloitte</h3>
                  <p>Project was about precision and information.</p>
                  <i className="flaticon-up-right-arrow" />
                  <button
                    data-mfp-src="#portfolio-wrapper"
                    className="portfolio-link modal-popup"
                  />
                </div>
              </div>
              <div className="portfolio-item uxui">
                <div className="image-box">
                  <img src="/img/portfolio/1.jpg" alt />
                </div>
                <div className="content-box">
                  <h3 className="portfolio-title">New Age</h3>
                  <p>Project was about precision and information.</p>
                  <i className="flaticon-up-right-arrow" />
                  <button
                    data-mfp-src="#portfolio-wrapper"
                    className="portfolio-link modal-popup"
                  />
                </div>
              </div>
              <div className="portfolio-item mobile-app">
                <div className="image-box">
                  <img src="/img/portfolio/3.jpg" alt />
                </div>
                <div className="content-box">
                  <h3 className="portfolio-title">Sebastian</h3>
                  <p>Project was about precision and information.</p>
                  <i className="flaticon-up-right-arrow" />
                  <button
                    data-mfp-src="#portfolio-wrapper"
                    className="portfolio-link modal-popup"
                  />
                </div>
              </div>
              <div className="portfolio-item branding">
                <div className="image-box">
                  <img src="/img/portfolio/4.jpg" alt />
                </div>
                <div className="content-box">
                  <h3 className="portfolio-title">Mochnix</h3>
                  <p>Project was about precision and information.</p>
                  <i className="flaticon-up-right-arrow" />
                  <button
                    data-mfp-src="#portfolio-wrapper"
                    className="portfolio-link modal-popup"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
