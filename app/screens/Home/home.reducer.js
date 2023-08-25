import {
  FETCH_PROFILE_ERROR,
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  FETCH_POST_ERROR,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from './home.actionTypes';

const initialState = {
  profile: null,
  loadingProfile: true,
  loadingPosts: true,
};

export default function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROFILE_REQUEST:
      return {
        ...state,
        profile: null,
        loadingProfile: true,
      };

    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loadingProfile: false,
      };

    case FETCH_PROFILE_ERROR:
      return {
        ...state,
        profile: null,
        loadingProfile: false,
      };

    case FETCH_POST_REQUEST:
      return {
        ...state,
        posts: null,
        loadingPosts: true,
      };

    case FETCH_POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loadingPosts: false,
      };

    case FETCH_POST_ERROR:
      return {
        ...state,
        posts: null,
        loadingPosts: false,
      };

    default:
      return state;
  }
}
