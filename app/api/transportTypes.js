export type ApiErrorCode = string;

export type ApiResponseErrorData = Readonly<{
  code: ApiErrorCode,
  msg: string,
  result: 'error',
}>;
