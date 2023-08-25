import {apiGet} from '../api';

export function fetchProfile() {
  return apiGet({
    auth: {},
    route: 'accounts/lookup?acct=davidzipper',
  });
}

export function fetchPost(id) {
  return apiGet({
    auth: {},
    route: `accounts/${id}/statuses?exclude_replies=true`,
  });
}
