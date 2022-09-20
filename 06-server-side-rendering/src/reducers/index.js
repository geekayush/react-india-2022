import { initialState } from "../store";

// Use the initialState as a default value
export default function rootReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "populate/breeds":
      return {
        ...state,
        breeds: action.payload,
      };
    case "populate/dogs":
      return {
        ...state,
        dogs: action.payload,
      };
    case "populate/dog":
      return {
        ...state,
        dog: action.payload,
      };
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
