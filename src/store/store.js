import { compose, createStore, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
//root reducer

import logger from "redux-logger";
import thunk from "redux-thunk"; //keeping code for reference
// const middleWares = [logger]; //keeping code for reference

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["user"], //keeping this as reference
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean); //filtering Boolean is new to me!

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
