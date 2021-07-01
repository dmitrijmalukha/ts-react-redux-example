import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const makeStore = (initState: {}) => {
  const middleware: any[] = [];
  let enhancer = null;

  if (process.env.NODE_ENV !== "production") {
    enhancer = compose(
      applyMiddleware(...middleware, thunk),
      (window as any)?.__REDUX_DEVTOOLS_EXTENSION__
        ? (window as any)?.__REDUX_DEVTOOLS_EXTENSION__()
        : (a: any) => a
    );
  } else {
    enhancer = applyMiddleware(...middleware, thunk);
  }

  const store = createStore(rootReducer, initState, enhancer);

  return store;
};

export default makeStore;
