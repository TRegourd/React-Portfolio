import React from "react";
import "./nav.css";
import { TiHomeOutline } from "react-icons/ti";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookContent } from "react-icons/bi";
import { BsHandThumbsUp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Nav = () => {
  return (
    <nav>
      <a href="">
        <TiHomeOutline />
      </a>
      <a href="">
        <AiOutlineUser />
      </a>
      <a href="">
        <BiBookContent />
      </a>
      <a href="">
        <BsHandThumbsUp />
      </a>
      <a href="">
        <MdOutlineEmail />
      </a>
    </nav>
  );
};

export default Nav;
