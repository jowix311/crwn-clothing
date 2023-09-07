import {
  // auth,
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
// import { getRedirectResult } from "firebase/auth";
// import { useEffect } from "react";

const SignIn = () => {
  // //Note: there is an issue with Firebase Redirect, they recommend using popup instead
  // useEffect(() => {
  //   const getResponse = async () => {
  //     const response = await getRedirectResult(auth);
  //
  //     if (response) {
  //       const userDocReference = await createUserDocumentFromAuth(
  //         response.user
  //       );
  //     }
  //   };
  //
  //   getResponse();
  // }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocReference = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/*<button onClick={signInWithGoogleRedirect}>*/}
      {/*  Sign in with Google Redirect*/}
      {/*</button>*/}
    </div>
  );
};

export default SignIn;
