import axios from 'axios';
import { FETCH_USER } from './types';


export const fetchUser = (uname, pass) => async dispatch => {
  //console.log(uname);
  const config = {
    headers: {'Content-Type': 'application/x-www-form-urlencoded' }
  };
  const url = 'http://138.68.108.162:8080/cg-service/api/v1/login';
  const data = {
    username: uname,
    pword: pass
  }
  const res = await axios.post( url, data, config);
    console.log(res.data);
    dispatch({ type: FETCH_USER, payload: res.data.ok});
    // TODO: res.data.ok -- change???
};

