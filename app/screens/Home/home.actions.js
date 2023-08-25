import {
  fetchProfile as fetchProfileService,
  fetchPost as fetchPostServices,
} from '../../services/home.service';
import {
  FETCH_PROFILE_ERROR,
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_POST_ERROR,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from './home.actionTypes';

export function fetchProfile() {
  return async dispatch => {
    try {
      dispatch({type: FETCH_PROFILE_REQUEST});
      return fetchProfileService()
        .then(data => {
          const {id} = data;
          dispatch({type: FETCH_PROFILE_SUCCESS, payload: data});

          dispatch(fetchPosts(id));
        })
        .catch(error => {
          console.log(error);
          throw new Error(error);
        });
    } catch (error) {
      console.log(error);
      dispatch({type: FETCH_PROFILE_ERROR});
    }
  };
}

export function fetchPosts(id) {
  return async dispatch => {
    try {
      dispatch({type: FETCH_POST_REQUEST});
      return fetchPostServices(id)
        .then(data => {
          dispatch({type: FETCH_POST_SUCCESS, payload: data});
        })
        .catch(error => {
          console.log(error);
          throw new Error(error);
        });
    } catch (error) {
      console.log(error);
      dispatch({type: FETCH_POST_ERROR});
    }
  };
}
