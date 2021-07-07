import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
// import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const GET_FRIENDS_START = 'GET_FRIENDS_START';
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS';
export const GET_FRIENDS_FAILURE = 'GET_FRIENDS_FAILURE';

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';

export const login = (user) => dispatch => {
  dispatch({ type: LOGIN_START });
console.log(user)
  axios
    .post('http://localhost:5000/api/login', user)
    .then(res => {
        console.log (res.data)
      
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
      // console.log('JWT Token', res.data.payload);
      // Goes to friend's list if successful
    
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response });
    });
};

export const getFriends = () => dispatch => {
  dispatch({ type: GET_FRIENDS_START });

  axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => {
      
      console.log("getFriend")
      dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_FRIENDS_FAILURE, payload: err.response });
    });
};

export const addFriend = (friend) => dispatch => {
  dispatch({ type: ADD_FRIEND_START });

  axiosWithAuth()
    .post('/friends', friend)
    .then(res => {
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: friend });
    
    })
    .catch(err => {
      dispatch({ type: ADD_FRIEND_FAILURE, payload: err.response });
    });
};