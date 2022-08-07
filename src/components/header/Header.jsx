import React from "react";
import CTA from "./CTA"
import ME from '../../assets/1151373.png'
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Xin chao toi la</h5>
        <h1>Duyet</h1>
        <h5 className="text-light">Mobile Developer</h5>
        <CTA></CTA>
        <div className="me">
          <img style={{width:"100px",height:"100px"}} src={ME} alt="me " />
        </div>
        <a href="#contact" className="scroll_down">ScrollDown</a>
      <HeaderSocials></HeaderSocials>
      </div>
    </header>
  );
};

export default Header;
