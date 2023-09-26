import React from "react";

import LOGO from "../assets/netflix-logo-png.png";
const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-44 " src={LOGO} alt="background pic"></img>
    </div>
  );
};

export default Header;
