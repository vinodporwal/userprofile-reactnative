import {apiCall} from './apiCall';
import {encodeParamsForUrl} from '../utils/url';

export default async ({auth, route, params = {}}) => {
  const encodedParams = encodeParamsForUrl(params);
  return apiCall(auth, `${route}${encodedParams ? `?${encodedParams}` : ''}`, {
    method: 'get',
  });
};
