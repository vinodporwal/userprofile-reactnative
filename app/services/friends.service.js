import {apiGet} from '../api';

export function fetchFriendsList(id) {
  return apiGet({
    auth: {},
    route: `accounts/${id}/followers`,
  });
}
