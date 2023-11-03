import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  getCurrentUser,
  onAuthStateChangeListener,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  //keeping code below for reference (since we migrated to used promises to make use of Sagas)
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangeListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
  //     dispatch(setCurrentUser(user)); //user is null when user signed out
  //   });
  //
  //   return unsubscribe; // unsubscribe when unmount
  // }, [dispatch]); //adding dispatch as dependency to remove react warning (although dispatch does not change)

  useEffect(() => {
    getCurrentUser().then((user) => console.log(user));
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
