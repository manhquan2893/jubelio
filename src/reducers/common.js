import { REGISTER, LOGIN, GET_USER_INFO,
  GET_POS_SETTINGS } from "../constants/actionTypes";

let initState={
  posSettings:{},
  userInfo:{}
}
export default (state = initState, action) => {
    switch (action.type) {
      case LOGIN:
      case REGISTER:
        return {
          ...state,
          redirectTo: !action.error ? '/' : null
        };
      case GET_USER_INFO:
        return {
          ...state,
          userInfo: action.payload
        };
      case GET_POS_SETTINGS:
        return {
          ...state,
          posSettings: action.payload
        }
      default:
        return state;
    }
  };