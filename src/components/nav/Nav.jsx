import React from "react";
import "./nav.css";
import { TiHomeOutline } from "react-icons/ti";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookContent } from "react-icons/bi";
import { BsHandThumbsUp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <TiHomeOutline />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBookContent />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <BsHandThumbsUp />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdOutlineEmail />
      </a>
    </nav>
  );
};

export default Nav;
