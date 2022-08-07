import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="http://github.com" target={"_blank"}>
        <BsGithub></BsGithub>
      </a>
      <a href="http://google.com" target={"_blank"}>
        <AiFillGoogleCircle></AiFillGoogleCircle>
      </a>
    </div>
  );
};

export default HeaderSocials;
