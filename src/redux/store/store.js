import { createStore } from "redux";
import rootReducer from "../reducers";

//state Inicial
const initialState = {
  usuarios: []
};

//createStore contiene el state de la app
//3 paramenters: reducer, state, applyMiddleware

export const store = createStore(rootReducer, initialState);

//Subscribe
