import {
  FETCH_FRIENDS_LIST_ERROR,
  FETCH_FRIENDS_LIST_REQUEST,
  FETCH_FRIENDS_LIST_SUCCESS,
} from './friends.actionTypes';
import {fetchFriendsList as fetchFriendsListService} from '../../services/friends.service';

export function fetchFriendsList() {
  console.log('requesting');
  return async dispatch => {
    try {
      dispatch({type: FETCH_FRIENDS_LIST_REQUEST});
      console.log('request');
      return fetchFriendsListService('109243381954683714')
        .then(data => {
          console.log(data);
          dispatch({type: FETCH_FRIENDS_LIST_SUCCESS, payload: data});
        })
        .catch(error => {
          console.log(error);
          throw new Error(error);
        });
    } catch (error) {
      console.log(error);
      dispatch({type: FETCH_FRIENDS_LIST_ERROR});
    }
  };
}
