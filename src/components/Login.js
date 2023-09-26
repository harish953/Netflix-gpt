import React, { useState } from "react";
import { useSubmit } from "react-router-dom";
import { IMAGE_URL } from "../utils/constants";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover "
          src={IMAGE_URL}
          alt="netflix-logo"
        />
      </div>
      <form className="absolute flex flex-col bg-black pt-4 pb-6 text-center  w-4/12  top-1/4 left-1/3 opacity-80 ">
        <h1 className="text-left p-2 pt-4 mx-10 my-4  text-3xl font-bold text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="py-3 px-8 mx-10 my-2 text-left bg-gray-700 text-white outline-none"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="py-3 px-8 mx-10 my-2 text-left bg-gray-700 text-white outline-none"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="py-3 px-8 mx-10 my-2  bg-gray-700 text-white outline-none"
          type="text"
          placeholder="Password"
        />
        <button
          className="p-4  mx-10  my-8  text-center bg-red-600 text-white"
          type="submit"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-left mx-10 text-white">
          {isSignInForm ? "New to Netflix?" : "Already Registered?"}
          <span className="text-white text-lg" onClick={toggleSignInForm}>
            Sign Up Now
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
