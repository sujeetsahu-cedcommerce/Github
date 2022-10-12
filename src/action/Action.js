import { USER } from "../Type";

const users = (username) => {
  return {
    type: USER,
    payload: username,
  };
};

export default users;
