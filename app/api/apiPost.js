import {apiCall} from './apiCall';

export default async ({auth, route, params}) => {
  return apiCall(auth, route, {
    method: 'post',
    body: JSON.stringify(params),
  });
};
