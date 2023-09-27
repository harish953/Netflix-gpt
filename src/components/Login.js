import React, { useRef, useState } from "react";
import { useSubmit } from "react-router-dom";
import { IMAGE_URL } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonOnClick = () => {
    // validate form data
    console.log(
      email.current.value,
      password.current.value,
      name.current.value
    );
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);

    if (message) return;

    //Sign In  Signup
    if (!isSignInForm) {
      //signup logic
      const createUser = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // User creation successful
            const user = userCredential.user;
            console.log("User created:", user);

            // Update the user's display name with the provided name
            return updateProfile(user, {
              displayName: name,
            });
          })
          .then(() => {
            console.log("Display name updated successfully");
            // You can perform additional actions here, like navigating to a new page or showing a success message.
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error creating user:", errorCode, errorMessage);
            // Set an error message to display to the user.
            setErrorMessage(`${errorCode} - ${errorMessage}`);
          });
      };
      createUser(
        name.current.value,
        email.current.value,
        password.current.value
      );
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }

    setErrorMessage(message);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
      <form
        onClick={handleSubmit}
        className="absolute flex flex-col bg-black pt-4 pb-6 text-center  w-4/12  top-1/4 left-1/3 opacity-80 "
      >
        <h1 className="text-left p-2 pt-4 mx-10 my-4  text-3xl font-bold text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="py-3 px-8 mx-10 my-2 text-left bg-gray-700 text-white outline-none"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="py-3 px-8 mx-10 my-2 text-left bg-gray-700 text-white outline-none"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="py-3 px-8 mx-10 my-2  bg-gray-700 text-white outline-none"
          type="password"
          placeholder="Password"
        />
        <p className="text-base text-red-600 text-left mx-10 py-2">
          {errorMessage}
        </p>
        <button
          className="p-4  mx-10  my-8  text-center bg-red-600 text-white"
          type="submit"
          onClick={handleButtonOnClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-left mx-10 text-white">
          {isSignInForm ? "New to Netflix?" : "Already Registered?"}
          <span
            className="text-white text-lg cursor-pointer"
            onClick={toggleSignInForm}
          >
            {!isSignInForm ? "Sign In" : "Sign Up Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
