import "./Login.css";
import { useForm } from "react-hook-form";
import firebase from "firebase/app";
import "firebase/auth";
// import firebaseConfig from "./firebase.config.js";
import { useContext, useState } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { firebaseInitialization } from "./SignOut";

function Login() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useContext(UserContext);
  
  firebaseInitialization();



  const googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var googleUser = result.user;
        const newUserInfo = { ...user };
        newUserInfo.name = googleUser.displayName;
        newUserInfo.email = googleUser.email;
        newUserInfo.isSignedIn = true;
        setUser(newUserInfo);
        history.replace(from);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="App">
        <h3 className="p-2">Login</h3>
        
      {/* google login */}

      <p>Or</p>
      <div className="d-flex justify-content-center googleLogin">
        
        <button onClick={() => googleLogin()}>Continue with Google</button>
      </div>
    </div>
  );
}

export default Login;
