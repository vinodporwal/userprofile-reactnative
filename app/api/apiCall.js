import {apiFetch} from './apiFetch';
import {
  MalformedResponseError,
  NetworkError,
  interpretApiResponse,
} from './apiErrors';

export const apiCall = async (auth, route, params) => {
  try {
    let response;
    let json;
    try {
      response = await apiFetch(auth, route, params);
      json = await response.json();
    } catch (error) {
      if (error instanceof TypeError) {
        throw new NetworkError(error.message);
      }
      throw error;
    }

    return json;
  } catch (errorIllTyped) {
    const error = errorIllTyped;

    if (!(error instanceof Error)) {
      throw new Error('Unexpected non-error thrown in apiCall');
    }

    if (error instanceof MalformedResponseError) {
      console.warn(
        `Bad response from server: ${
          JSON.stringify(error.message) ?? 'undefined'
        }`,
      );
    }

    throw error;
  }
};
