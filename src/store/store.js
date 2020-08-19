import { createStore } from "redux";
import peopleReducer from "../reducers/reducer";

export default createStore(peopleReducer);