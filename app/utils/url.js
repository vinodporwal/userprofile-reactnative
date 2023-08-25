export type UrlParamValue = string | boolean | number;
export type UrlParams = {[key: string]: string};

export const encodeParamsForUrl = params =>
  Object.keys(params)
    .map((key, index) =>
      params[key] === undefined ? null : `${key}=${params[key]}`,
    )
    .join('&');
