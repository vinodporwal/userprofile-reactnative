import axios from 'axios';
import {restUrls} from '../config';

const baseURL = restUrls.baseURL;
const apiVersion = '/api/v1/';

export const getFetchParams = (auth, params) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      ...auth,
    },
    ...params,
  };
};

export const apiFetch = async (auth, route, params) => {
  console.log(`${baseURL}${apiVersion}${route}`);
  return fetch(`${baseURL}${apiVersion}${route}`, {
    ...getFetchParams(auth, params),
  });
};
