import {combineReducers} from 'redux';
import application from '../application/application.reducer';
import home from '../screens/Home/home.reducer';
import friends from '../screens/Friends/friends.reducer';

export default combineReducers({
  // reducers
  application,
  home,
  friends,
});
