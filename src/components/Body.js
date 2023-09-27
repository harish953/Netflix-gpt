import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
      } else {
        // User is signed out
        dispatch(removeUser());

        // ...
      }
    });
  }, []);
  return <RouterProvider router={appRouter}></RouterProvider>;
};

export default Body;
