import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { firebaseInitialization } from "./FirebaseRefectored";

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

      <div className="d-flex justify-content-center googleLogin" onClick={() => googleLogin()}>
        Continue with Google
      </div>
    </div>
  );
}

export default Login;
