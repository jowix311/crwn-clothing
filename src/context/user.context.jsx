import { createContext, useEffect, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
} from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTIONS_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CURRENT_USER":
      return {
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled action ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;
  const setCurrentUser = (user) => {
    createAction(USER_ACTIONS_TYPES.SET_CURRENT_USER, user);
  };
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user); //null when user signed out
    });

    return unsubscribe; // unsubscribe when unmount
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
