import React from "react";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../../Firebase/config";
import { useNavigate } from "react-router-dom";

// Configure FirebaseUI.
// const uiConfig = {
//   // Redirect to Google, after that, redirect to home.
//   signInFlow: "redirect",

//   // Redirect to /admin after sign in is successful.
//   signInSuccessUrl: "/admin",

//   // We will display Google and Facebook as auth providers.
//   signInOptions: [GoogleAuthProvider.PROVIDER_ID],
// };

const googleProvider = new GoogleAuthProvider();

function SignIn(props) {
  const navigate = useNavigate();
  const handleLogin = async (provider) => {
    try {
      const { providerId, user } = await signInWithPopup(auth, provider);

      if (providerId && user) {
        console.log("user", user);
        navigate("/admin");
      }
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} /> */}

      <button style={{ width: "200px", marginBottom: 5 }} onClick={() => handleLogin(googleProvider)}>
        Login by Google
      </button>
    </div>
  );
}

export default SignIn;
