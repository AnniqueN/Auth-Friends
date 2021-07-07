import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_FRIENDS_START,
    GET_FRIENDS_FAILURE,
    GET_FRIENDS_SUCCESS,
    ADD_FRIEND_START,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAILURE,
  } from '../actions';
  
  const initialState = {
    friends: [], token:localStorage.getItem('token'),
    loginIsLoading: false,
    addFriendsIsLoading: false, 
    getFriendIsLoading: false, 
    loginError: '',
    addFriend: '',
    getFriendError: '',
  };
  
  const reducers = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          loginIsLoading: true,
          loginError: '',
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loginIsLoading: false,
          loginError: '',
          token: action.payload,
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          loginIsLoading: false,
          loginError: action.payload,
        };
      case GET_FRIENDS_START:
        return {
          ...state,
          getFriendIsLoading: true,
          getFriendError: '',
        };
      case GET_FRIENDS_SUCCESS:
        return {
          ...state,
          getFriendIsLoading: false,
          getFriendError: '',
          friends: action.payload,
        };
      case GET_FRIENDS_FAILURE:
        return {
          ...state,
          getFriendIsLoading: false,
          getFriendError: action.payload,
          friends: [],
        };
      case ADD_FRIEND_START:
        return {
          ...state,
          addFriendsIsLoading: true,
          addFriendsError: '',
        };
      case ADD_FRIEND_SUCCESS:
          console.log(action.payload)
        return {
          ...state,
          addFriendsIsLoading: false,
          addFriendsError: '',
          friends: [...state.friends, action.payload],
        };
      case ADD_FRIEND_FAILURE:
        return {
          ...state,
          addFriendsIsLoading: false,
          addFriendsError: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducers;