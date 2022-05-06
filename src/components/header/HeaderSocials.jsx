import React from "react";
import { BsLinkedin, BsGithub, BsDribbble } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/thomasregourd/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/TRegourd" target="_blank">
        <BsGithub />
      </a>
      <a href="https://dribbble.com/TRegourd" target="_blank">
        <BsDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
