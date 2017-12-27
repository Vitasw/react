import postReducer from "./../reducers/posts";
import { createStore } from "redux";

let store = createStore(postReducer);

export default store;