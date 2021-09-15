import {
  GET_LIST_ALL_USER,
  DELETE_USER,
} from "../actions/types.js";

const isEmpty = require("is-empty");

const initialState = {
  users: [],
  verification: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    
    case GET_LIST_ALL_USER:
      return {
        ...state,
        users: action.payload,
      };
      case DELETE_USER:
      return {
        ...state,
        verification: !isEmpty(action.payload),
      };
    default:
      return state;
  }
}
