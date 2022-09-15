import { createStore } from "redux";
import rootReducer from "../reducers";

export const initialState = {
  breeds: [],
  dogs: [],
  dog: {
    images: [],
    name: "",
    animal: "",
    breed: "",
    city: "",
    state: "",
    description: "",
  },
};

const enhancer =
  global.window &&
  global.window.__REDUX_DEVTOOLS_EXTENSION__ &&
  global.window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore(preloadedState = {}) {
  return createStore(rootReducer, preloadedState, enhancer);
}
