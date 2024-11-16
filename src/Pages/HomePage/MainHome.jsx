import React from "react";
import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";
import PortfolioPopup from "../../Popups/PortfolioPopup";
import Services from "./Services";
import ServicePopup from "../../Popups/ServicePopup";
import Skills from "./Skills";
import Resume from "./Resume";
import Contact from "./Contact";
import Footer from "../../Layout/Footer";

const MainHome = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <ServicePopup />
      <Portfolio />
      <PortfolioPopup />
      <Skills />
      <Resume />

      <Contact />
    </>
  );
};

export default MainHome;
