import type {ApiErrorCode, ApiResponseErrorData} from './transportTypes';

export class ExtendableError extends Error {
  name: typeof Error.name = this.constructor.name;
}

export class RequestError extends ExtendableError {
  httpStatus: number | void | undefined | null;

  data: any;
}

export class ApiError extends RequestError {
  code: ApiErrorCode;

  httpStatus: number;

  data: Readonly<{}>;

  constructor(httpStatus: number, data: Readonly<ApiResponseErrorData>) {
    const {result, code, msg, ...rest} = data;
    super(msg);
    this.data = rest;
    this.code = code;
    this.httpStatus = httpStatus;
  }
}

export class NetworkError extends RequestError {}

export class ServerError extends RequestError {
  httpStatus: number;

  constructor(msg: string, httpStatus: number) {
    super(msg);
    this.httpStatus = httpStatus;
  }
}

export class Server5xxError extends ServerError {
  constructor(httpStatus: number) {
    super(`Network request failed: HTTP status ${httpStatus}`, httpStatus);
  }
}

export class MalformedResponseError extends ServerError {
  constructor(httpStatus: number, data: any) {
    super(
      `Server responded with invalid message; HTTP status ${httpStatus}`,
      httpStatus,
    );
    this.data = data;
  }
}

export class UnexpectedHttpStatusError extends ServerError {
  constructor(httpStatus: number, data: any) {
    super(`Server gave unexpected HTTP status: ${httpStatus}`, httpStatus);
    this.data = data;
  }
}

export const interpretApiResponse = (httpStatus: number, data: any): any => {
  if (httpStatus >= 200 && httpStatus <= 299) {
    if (data === undefined) {
      throw new MalformedResponseError(httpStatus, data);
    }

    return data;
  }

  if (httpStatus >= 500 && httpStatus <= 599) {
    throw new Server5xxError(httpStatus);
  }

  if (httpStatus >= 400 && httpStatus <= 499) {
    if (typeof data === 'object' && data !== null) {
      const {result, msg, code = 'BAD_REQUEST'} = data;

      if (
        result === 'error' &&
        typeof msg === 'string' &&
        typeof code === 'string'
      ) {
        throw new ApiError(httpStatus, {...data, result, msg, code});
      }
    }

    throw new MalformedResponseError(httpStatus, data);
  }

  throw new UnexpectedHttpStatusError(httpStatus, data);
};
