import { createStore } from "redux";
import { UserReducer } from "./reducers/UserReducer";

export const store = createStore(UserReducer);
