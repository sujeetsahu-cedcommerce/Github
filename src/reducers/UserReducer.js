import { USER } from "../Type";

const initialState = {
  user_Data: "",
};
export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER:
      return {
        ...state,
        user_Data: action.payload,
      };
    default:
      return { state };
  }
};
