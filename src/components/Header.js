import React from "react";
import LOGO from "../assets/netflix-logo-png.png";

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .then(() => {});
  };
  return (
    <div className="absolute w-screen top-0 px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between ">
      <img className="w-44 h-16" src={LOGO} alt="background pic"></img>
      {user && (
        <div className="flex">
          <img
            className="w-12 h-12 m-2"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="user-icon"
          ></img>
          <button onClick={handleSignOut} className="h-12 text-white m-2">
            {" "}
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
