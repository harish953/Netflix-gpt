import React, { useRef, useState } from "react";
// import { useHistory } from "react-router-dom";
import { IMAGE_URL } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  // const history = useHistory();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null); // Clear any previous error message
  };

  const handleButtonOnClick = async () => {
    const message = checkValidData(email.current.value, password.current.value);

    if (message) return;

    try {
      if (!isSignInForm) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        const user = userCredential.user;

        await updateProfile(user, { displayName: name.current.value });
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        const user = userCredential.user;
        await updateProfile(user, { displayName: user.displayName });

        // history.push("/dashboard"); // Redirect to the dashboard or another route
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error:", errorCode, errorMessage);
      // setErrorMessage(`${errorCode} - ${errorMessage}`);
      const errorMessages = {
        "auth/invalid-login-credentials":
          "User not found. Please check your email or password.",
        "auth/wrong-password": "Incorrect password. Please try again.",
        "auth/email-already-in-use-Firebase": "Email ID already in use",
        // Add more error code mappings as needed
      };

      // Get the custom error message or use a default message
      const customErrorMessage =
        errorMessages[error.code] || "An error occurred.";

      console.error("Error:", error.code, customErrorMessage);
      setErrorMessage(customErrorMessage);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center  ">
      <Header />
      <div className="absolute inset-0 z-[-1]">
        <img
          className="w-full h-full object-cover"
          src={IMAGE_URL}
          alt="Background"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className=" bg-black bg-opacity-70 text-white p-8 max-w-md w-full space-y-6 rounded-lg"
      >
        <h1 className="text-3xl font-semibold text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">
              Full Name
            </label>
            <input
              ref={name}
              className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-white"
              type="text"
              placeholder="Full Name"
            />
          </div>
        )}
        <div>
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            ref={email}
            className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-white"
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Password</label>
          <input
            ref={password}
            className="mt-1 p-2 w-full border rounded-md bg-gray-700 text-white"
            type="password"
            placeholder="Password"
          />
        </div>
        <p className="text-red-600 text-center">{errorMessage}</p>
        <button
          className="p-3 bg-red-600 w-full text-white rounded-md font-semibold hover:bg-red-700 transition duration-300"
          type="submit"
          onClick={handleButtonOnClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-center">
          {isSignInForm ? "New to Netflix?" : "Already Registered?"}{" "}
          <span
            className="text-red-600 cursor-pointer"
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
