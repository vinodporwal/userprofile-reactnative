import {apiCall} from './apiCall';
import {encodeParamsForUrl} from '../utils/url';

export default async ({auth, route, params = {}}) => {
  return apiCall(auth, route, {
    method: 'put',
    data: encodeParamsForUrl(params),
  });
};
