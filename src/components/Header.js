import React, { useEffect } from "react";
import LOGO from "../assets/netflix-logo-png.png";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ICON_URL } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .then(() => {});
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, accessToken, phoneNumber, photoURL } =
          user;
        // ...
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            accessToken: accessToken,
            phoneNumber: phoneNumber,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");

        // ...
      }
    });
    //unSubscribe when component unmounts
    return () => unSubscribe();
  }, []);

  return (
    <div className="absolute w-screen top-0 px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
      <img className="w-44 h-16" src={LOGO} alt="background pic"></img>
      {/*user && (
        <div className="flex space-x-10">
          <button className="text-white hover:underline">Home</button>
          <button className="text-white hover:underline">Movies</button>
          <button className="text-white hover:underline">Shows</button>
          {/* Add more buttons as needed }
        </div>
      )*/}
      {user && (
        <div className="flex">
          <img className="w-12 h-12 m-2" src={ICON_URL} alt="user-icon"></img>
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
