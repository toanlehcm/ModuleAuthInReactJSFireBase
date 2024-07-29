import React from "react";
import { auth } from "../../../../Firebase/config";
import { StyledFirebaseAuth } from "react-firebaseui";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// const googleProvider = new GoogleAuthProvider();

// Configure FirebaseUI.
const uiConfig = {
  // Redirect to Google, after that, redirect to home.
  signInFlow: "redirect",

  // Redirect to /admin after sign in is successful.
  signInSuccessUrl: "/admin",

  // We will display Google and Facebook as auth providers.
  // signInOptions: [auth.GoogleAuthProvider.PROVIDER_ID],
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],

  // Want to go to onAuthStateChanged,so not use callback.
  // callbacks: {
  //   // Avoid redirects after sign-in.
  //   signInSuccessWithAuthResult: () => false,
  // },
};

function SignIn(props) {
  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} /> */}
      {/* <button
        style={{ width: "100%", marginBottom: 5 }}
        // onClick={() => handleLogin(googleProvider)}
      >
        Login by Google
      </button> */}
    </div>
  );
}

export default SignIn;
