import { REGISTER, LOGIN } from "../constants/actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
      case LOGIN:
      case REGISTER:
        return {
          ...state,
          error: action.error ? action.payload.code : null,
          isAuthenticated: action.error ? false : true,
        };
      default:
        return state;
    }
  };