import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Services = () => {
  return (
    <section className="services-section" id="services-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                My Quality Services
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
            <div className="services-widget position-relative">
              <div
                className="service-item current d-flex flex-wrap align-items-center wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="left-box d-flex flex-wrap align-items-center">
                  <span className="number">01</span>
                  <h3 className="service-title">Front-End Development</h3>
                </div>
                <div className="right-box">
                  <p>
                    Crafting dynamic and responsive web applications using
                    modern frameworks like React.js, ensuring a seamless user
                    experience.
                  </p>
                </div>
                <FaArrowRight />
                <button
                  data-mfp-src="#service-wrapper"
                  className="service-link modal-popup"
                />
              </div>
              <div
                className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="left-box d-flex flex-wrap align-items-center">
                  <span className="number">02</span>
                  <h3 className="service-title">Back-End Development</h3>
                </div>
                <div className="right-box">
                  <p>
                    Building robust and secure APIs with .NET Core Web API,
                    focusing on performance and scalability.
                  </p>
                </div>
                <FaArrowRight />
                <button
                  data-mfp-src="#service-wrapper"
                  className="service-link modal-popup"
                />
              </div>
              <div
                className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="left-box d-flex flex-wrap align-items-center">
                  <span className="number">03</span>
                  <h3 className="service-title">E-Commerce Development</h3>
                </div>
                <div className="right-box">
                  <p>
                    Developing custom Shopify and WordPress-based e-commerce
                    solutions, tailored to meet specific business needs.
                  </p>
                </div>
                <FaArrowRight />
                <button
                  data-mfp-src="#service-wrapper"
                  className="service-link modal-popup"
                />
              </div>
              <div
                className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="left-box d-flex flex-wrap align-items-center">
                  <span className="number">04</span>
                  <h3 className="service-title">Database Management</h3>
                </div>
                <div className="right-box">
                  <p>
                    Expertise in SQL Server and Entity Framework Core, handling
                    complex queries and database optimization.
                  </p>
                </div>
                <FaArrowRight />
                <button
                  data-mfp-src="#service-wrapper"
                  className="service-link modal-popup"
                />
              </div>
              <div
                className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="left-box d-flex flex-wrap align-items-center">
                  <span className="number">05</span>
                  <h3 className="service-title">Custom Web Solutions</h3>
                </div>
                <div className="right-box">
                  <p>
                    Designing and delivering tailored full-stack web solutions,
                    integrating both front-end and back-end technologies.
                  </p>
                </div>
                <FaArrowRight />
                <button
                  data-mfp-src="#service-wrapper"
                  className="service-link modal-popup"
                />
              </div>
              <div
                className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="left-box d-flex flex-wrap align-items-center">
                  <span className="number">06</span>
                  <h3 className="service-title">Real-Time Applications</h3>
                </div>
                <div className="right-box">
                  <p>
                    Implementing real-time communication features using SignalR
                    for applications requiring live updates and interactions.
                  </p>{" "}
                </div>
              </div>

              <div className="active-bg wow fadeInUp" data-wow-delay=".5s" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
