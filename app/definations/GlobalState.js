export type GlobalState = {
  application: {
    root: string,
  },
  signup: {
    authenticating: boolean,
    verifying: boolean,
    email: string,
    error: boolean,
    errorMessage: string,
  },
  login: {
    authenticating: boolean,
    error: boolean,
    errorMessage: string,
  },
};
