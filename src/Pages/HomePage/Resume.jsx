import React from "react";
import { SlBadge } from "react-icons/sl";
import { FaGraduationCap } from "react-icons/fa6";
const Resume = () => {
  return (
    <section className="resume-section" id="resume-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-header wow fadeInUp" data-wow-delay=".3s">
              <h2 className="section-title">
                <SlBadge /> My Experience
              </h2>
            </div>
            <div className="resume-widget">
              <div className="resume-item wow fadeInLeft" data-wow-delay=".4s">
                <div className="time">2021 - Present</div>
                <h3 className="resume-title">Software Engineer</h3>
                <div className="institute">Giants Solutions</div>
              </div>
              {/* <div className="resume-item wow fadeInLeft" data-wow-delay=".5s">
                <div className="time">2021 - 2022</div>
                <h3 className="resume-title">Full Stack Web Developer</h3>
                <div className="institute">Parsons, The New School</div>
              </div> */}
              {/* <div className="resume-item wow fadeInLeft" data-wow-delay=".6s">
                <div className="time">2020 - 2021</div>
                <h3 className="resume-title">UI Designer</h3>
                <div className="institute">House of Life, Leeds</div>
              </div> */}
              {/* <div className="resume-item wow fadeInLeft" data-wow-delay=".7s">
                <div className="time">2018 - 2020</div>
                <h3 className="resume-title">Junior Graphics Designer</h3>
                <div className="institute">Theme Junction, Bursa</div>
              </div> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="section-header wow fadeInUp" data-wow-delay=".4s">
              <h2 className="section-title">
                <FaGraduationCap /> My Education
              </h2>
            </div>
            <div className="resume-widget">
              <div className="resume-item wow fadeInRight" data-wow-delay=".5s">
                <div className="time">2022 - Present</div>
                <h3 className="resume-title">Bachelor's in Science IT</h3>
                <div className="institute">Bahria University Karachi</div>
              </div>
              {/* <div className="resume-item wow fadeInRight" data-wow-delay=".6s">
                <div className="time">2016 - 2020</div>
                <h3 className="resume-title">Graphic design course</h3>
                <div className="institute">University of Denmark</div>
              </div>
              <div className="resume-item wow fadeInRight" data-wow-delay=".7s">
                <div className="time">2012 - 2015</div>
                <h3 className="resume-title">Web design course</h3>
                <div className="institute">University of California</div>
              </div>
              <div className="resume-item wow fadeInRight" data-wow-delay=".8s">
                <div className="time">2010 - 2011</div>
                <h3 className="resume-title">Design &amp; Technology</h3>
                <div className="institute">Parsons, The New School</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
