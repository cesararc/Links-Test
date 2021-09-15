import axios from "axios";

import {
  GET_LIST_ALL_USER,
  DELETE_USER,
} from "./types.js";

export const getListAllUser = () => (dispatch) => {
  axios
    .get(`https://reqres.in/api/users`)
    .then((res) =>
      dispatch({
        type: GET_LIST_ALL_USER,
        payload: res.data.data,
      })
    )
    .catch((err) => console.log(err));
};

export const deleteUser = (userId) => (dispatch) => {
  var r = confirm("Está seguro que desea eliminar este registro");
  if (r == true) {
    axios
      .put(
        `https://reqres.in/api/users/${userId}`
      )
      .then((res) =>{
        dispatch(
          {
            type: DELETE_USER,
            payload: res.data,
          },
          
          )
          
          alert("El registro se ha eliminado correctamente")
      })
          
      .catch((err) => console.log(err));
  } else {
    alert("Sus datos no se han modificado");
  }
};