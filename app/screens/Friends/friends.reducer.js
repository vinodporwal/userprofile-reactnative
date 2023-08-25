import {
  FETCH_FRIENDS_LIST_REQUEST,
  FETCH_FRIENDS_LIST_SUCCESS,
  FETCH_FRIENDS_LIST_ERROR,
} from './friends.actionTypes';

const initialState = {
  friends: [],
  loadingFriends: true,
};

export default function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FRIENDS_LIST_REQUEST:
      return {
        ...state,
        friends: [],
        loadingFriends: true,
      };

    case FETCH_FRIENDS_LIST_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        loadingFriends: false,
      };

    case FETCH_FRIENDS_LIST_ERROR:
      return {
        ...state,
        friends: [],
        loadingFriends: false,
      };
    default:
      return state;
  }
}
