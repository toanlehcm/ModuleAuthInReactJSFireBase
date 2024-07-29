import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../../Firebase/config";

// Configure FirebaseUI.
const uiConfig = {
  // Redirect to Google, after that, redirect to home.
  signInFlow: "redirect",

  // Redirect to /admin after sign in is successful.
  signInSuccessUrl: "/admin",

  // We will display Google and Facebook as auth providers.
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
};

function SignIn(props) {
  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
}

export default SignIn;
