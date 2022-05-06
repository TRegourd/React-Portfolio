import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/Me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hi there 👋</h5>
        <h1>Thomas Regourd</h1>
        <h5 className="text-light">Fullstack JS Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="Thomas' Profile Picutre" />
        </div>
        <a href="#contact" className="scroll_down"></a>
      </div>
    </header>
  );
};

export default Header;
