import { combineReducers } from "redux";

//Reducer
// state y action
const rootReducer = combineReducers({
  primero: primerReducer,
  segundo: secondReducer
});

export default rootReducer;
