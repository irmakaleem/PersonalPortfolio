import React, { useEffect, useState } from "react";

const PreloaderArea = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, [3000]);
    }
  }, []);
  if (loading) {
    return (
      <div>
        {/* <section classname="testimonial-section" id="testimonials-section">
        <div classname="container">
          <div classname="row">
            <div classname="col-lg-5">
              <div classname="section-header">
                <h2
                  classname="section-title wow fadeInLeft"
                  data-wow-delay=".3s"
                >
                  My Client's Stories
                </h2>
                <p classname="wow fadeInLeft" data-wow-delay=".4s">
                  Empowering people in new a digital journey with my super
                  services
                </p>
              </div>
            </div>
            <div classname="col-lg-7 col-xl-6 offset-xl-1">
              <div
                classname="testimonials-widget wow fadeInRight"
                data-wow-delay=".5s"
              >
                <div classname="owl-carousel testimonial-carousel">
                  <div classname="testimonial-item">
                    <div classname="top-area d-flex flex-wrap justify-content-between">
                      <div classname="logo-box">
                        <img src="assets/img/testimonials/logo/1.png" alt />
                      </div>
                      <div classname="image-box">
                        <img src="assets/img/testimonials/user/1.jpg" alt />
                      </div>
                    </div>
                    <div classname="icon-box">
                      <svg
                        width="{22}"
                        height="{22}"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                          fill="url(#paint0_linear_263_588)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_263_588"
                            x1="-0.0363755"
                            y1="-0.0729998"
                            x2="35.3333"
                            y2="-0.0729991"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="{1}"
                              stopcolor="var(--tj-theme-primary)"
                            />
                            <stop
                              offset="{1}"
                              stopcolor="#140C1C"
                              stopopacity="{0}"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                      <svg
                        width="{22}"
                        height="{22}"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                          fill="url(#paint1_linear_263_589)"
                        />
                        <defs>
                          <linearGradient
                            id="paint1_linear_263_589"
                            x1="-0.0363755"
                            y1="-0.0729998"
                            x2="35.3333"
                            y2="-0.0729991"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="{1}"
                              stopcolor="var(--tj-theme-primary)"
                            />
                            <stop
                              offset="{1}"
                              stopcolor="#140C1C"
                              stopopacity="{0}"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p classname="quote">
                      “Taylor is a professional Designer he really helps my
                      business by providing value to my business.
                    </p>
                    <h4 classname="name">Brandon Fraser</h4>
                    <span classname="designation">
                      Senior Software Dev, Cosmic Sport
                    </span>
                  </div>
                  <div classname="testimonial-item">
                    <div classname="top-area d-flex flex-wrap justify-content-between">
                      <div classname="logo-box">
                        <img src="assets/img/testimonials/logo/2.png" alt />
                      </div>
                      <div classname="image-box">
                        <img src="assets/img/testimonials/user/2.jpg" alt />
                      </div>
                    </div>
                    <div classname="icon-box">
                      <svg
                        width="{22}"
                        height="{22}"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                          fill="url(#paint2_linear_263_511)"
                        />
                        <defs>
                          <linearGradient
                            id="paint2_linear_263_511"
                            x1="-0.0363755"
                            y1="-0.0729998"
                            x2="35.3333"
                            y2="-0.0729991"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="{1}"
                              stopcolor="var(--tj-theme-primary)"
                            />
                            <stop
                              offset="{1}"
                              stopcolor="#140C1C"
                              stopopacity="{0}"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                      <svg
                        width="{22}"
                        height="{22}"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                          fill="url(#paint3_linear_263_510)"
                        />
                        <defs>
                          <linearGradient
                            id="paint3_linear_263_510"
                            x1="-0.0363755"
                            y1="-0.0729998"
                            x2="35.3333"
                            y2="-0.0729991"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="{1}"
                              stopcolor="var(--tj-theme-primary)"
                            />
                            <stop
                              offset="{1}"
                              stopcolor="#140C1C"
                              stopopacity="{0}"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p classname="quote">
                      “Taylor is a professional Designer he really helps my
                      business by providing value to my business.
                    </p>
                    <h4 classname="name">Tim Bailey</h4>
                    <span classname="designation">
                      SEO Specialist, Theme Junction
                    </span>
                  </div>
                  <div classname="testimonial-item">
                    <div classname="top-area d-flex flex-wrap justify-content-between">
                      <div classname="logo-box">
                        <img src="assets/img/testimonials/logo/1.png" alt />
                      </div>
                      <div classname="image-box">
                        <img src="assets/img/testimonials/user/1.jpg" alt />
                      </div>
                    </div>
                    <div classname="icon-box">
                      <svg
                        width="{22}"
                        height="{22}"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                          fill="url(#paint4_linear_263_512)"
                        />
                        <defs>
                          <linearGradient
                            id="paint4_linear_263_512"
                            x1="-0.0363755"
                            y1="-0.0729998"
                            x2="35.3333"
                            y2="-0.0729991"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="{1}"
                              stopcolor="var(--tj-theme-primary)"
                            />
                            <stop
                              offset="{1}"
                              stopcolor="#140C1C"
                              stopopacity="{0}"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                      <svg
                        width="{22}"
                        height="{22}"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                          fill="url(#paint5_linear_263_513)"
                        />
                        <defs>
                          <linearGradient
                            id="paint5_linear_263_513"
                            x1="-0.0363755"
                            y1="-0.0729998"
                            x2="35.3333"
                            y2="-0.0729991"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="{1}"
                              stopcolor="var(--tj-theme-primary)"
                            />
                            <stop
                              offset="{1}"
                              stopcolor="#140C1C"
                              stopopacity="{0}"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p classname="quote">
                      “Taylor is a professional Designer he really helps my
                      business by providing value to my business.
                    </p>
                    <h4 classname="name">Brandon Fraser</h4>
                    <span classname="designation">
                      Senior Software Dev, Cosmic Sport
                    </span>
                  </div>
                  <div classname="testimonial-item">
                    <div classname="top-area d-flex flex-wrap justify-content-between">
                      <div classname="logo-box">
                        <img src="assets/img/testimonials/logo/2.png" alt />
                      </div>
                      <div classname="image-box">
                        <img src="assets/img/testimonials/user/2.jpg" alt />
                      </div>
                    </div>
                    <div classname="icon-box">
                      <svg
                        width="{22}"
                        height="{22}"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                          fill="url(#paint6_linear_263_514)"
                        />
                        <defs>
                          <linearGradient
                            id="paint6_linear_263_514"
                            x1="-0.0363755"
                            y1="-0.0729998"
                            x2="35.3333"
                            y2="-0.0729991"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="{1}"
                              stopcolor="var(--tj-theme-primary)"
                            />
                            <stop
                              offset="{1}"
                              stopcolor="#140C1C"
                              stopopacity="{0}"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                      <svg
                        width="{22}"
                        height="{22}"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                          fill="url(#paint7_linear_263_515)"
                        />
                        <defs>
                          <linearGradient
                            id="paint7_linear_263_515"
                            x1="-0.0363755"
                            y1="-0.0729998"
                            x2="35.3333"
                            y2="-0.0729991"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="{1}"
                              stopcolor="var(--tj-theme-primary)"
                            />
                            <stop
                              offset="{1}"
                              stopcolor="#140C1C"
                              stopopacity="{0}"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p classname="quote">
                      “Taylor is a professional Designer he really helps my
                      business by providing value to my business.
                    </p>
                    <h4 classname="name">Tim Bailey</h4>
                    <span classname="designation">
                      SEO Specialist, Theme Junction
                    </span>
                  </div>
                  <div classname="testimonial-item">
                    <div classname="top-area d-flex flex-wrap justify-content-between">
                      <div classname="logo-box">
                        <img src="assets/img/testimonials/logo/1.png" alt />
                      </div>
                      <div classname="image-box">
                        <img src="assets/img/testimonials/user/1.jpg" alt />
                      </div>
                    </div>
                    <div classname="icon-box">
                      <svg
                        width="{22}"
                        height="{22}"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                          fill="url(#paint8_linear_263_512)"
                        />
                        <defs>
                          <linearGradient
                            id="paint8_linear_263_512"
                            x1="-0.0363755"
                            y1="-0.0729998"
                            x2="35.3333"
                            y2="-0.0729991"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="{1}"
                              stopcolor="var(--tj-theme-primary)"
                            />
                            <stop
                              offset="{1}"
                              stopcolor="#140C1C"
                              stopopacity="{0}"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                      <svg
                        width="{22}"
                        height="{22}"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                          fill="url(#paint9_linear_263_513)"
                        />
                        <defs>
                          <linearGradient
                            id="paint9_linear_263_513"
                            x1="-0.0363755"
                            y1="-0.0729998"
                            x2="35.3333"
                            y2="-0.0729991"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="{1}"
                              stopcolor="var(--tj-theme-primary)"
                            />
                            <stop
                              offset="{1}"
                              stopcolor="#140C1C"
                              stopopacity="{0}"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p classname="quote">
                      “Taylor is a professional Designer he really helps my
                      business by providing value to my business.
                    </p>
                    <h4 classname="name">Brandon Fraser</h4>
                    <span classname="designation">
                      Senior Software Dev, Cosmic Sport
                    </span>
                  </div>
                  <div classname="testimonial-item">
                    <div classname="top-area d-flex flex-wrap justify-content-between">
                      <div classname="logo-box">
                        <img src="assets/img/testimonials/logo/2.png" alt />
                      </div>
                      <div classname="image-box">
                        <img src="assets/img/testimonials/user/2.jpg" alt />
                      </div>
                    </div>
                    <div classname="icon-box">
                      <svg
                        width="{22}"
                        height="{22}"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                          fill="url(#paint10_linear_263_514)"
                        />
                        <defs>
                          <linearGradient
                            id="paint10_linear_263_514"
                            x1="-0.0363755"
                            y1="-0.0729998"
                            x2="35.3333"
                            y2="-0.0729991"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="{1}"
                              stopcolor="var(--tj-theme-primary)"
                            />
                            <stop
                              offset="{1}"
                              stopcolor="#140C1C"
                              stopopacity="{0}"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                      <svg
                        width="{22}"
                        height="{22}"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                          fill="url(#paint11_linear_263_515)"
                        />
                        <defs>
                          <linearGradient
                            id="paint11_linear_263_515"
                            x1="-0.0363755"
                            y1="-0.0729998"
                            x2="35.3333"
                            y2="-0.0729991"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="{1}"
                              stopcolor="var(--tj-theme-primary)"
                            />
                            <stop
                              offset="{1}"
                              stopcolor="#140C1C"
                              stopopacity="{0}"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p classname="quote">
                      “Taylor is a professional Designer he really helps my
                      business by providing value to my business.
                    </p>
                    <h4 classname="name">Tim Bailey</h4>
                    <span classname="designation">
                      SEO Specialist, Theme Junction
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
        <div className="preloader">
          <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path
              id="preloaderSvg"
              d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
            />
          </svg>
          <div className="preloader-heading">
            <div className="load-text">
              <span>L</span>
              <span>o</span>
              <span>a</span>
              <span>d</span>
              <span>i</span>
              <span>n</span>
              <span>g</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default PreloaderArea;
