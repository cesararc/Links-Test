import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { SET_CURRENT_USER, USER_LOADING } from "./types";

// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post(`https://reqres.in/api/login/${userData}`)
    .then(res => {
      // Save to localStorage
      //const user = res.data
      // Set token to localStorage
      const { token } = res.data;
      //console.log(user)
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(token));
    })
    .catch(err =>
      {console.log('Error de autenticacion')}
    );
};

// Set logged in user
export const setCurrentUser = token => {
  return {
    type: SET_CURRENT_USER,
    payload: token
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};