import { combineReducers } from "redux";
import { configureStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzaReducre } from "./reducers/pizzaReducer";

const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzaReducre,
});

const composeEnhancers = composeWithDevTools({});
const initialState = {};

const store = configureStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
