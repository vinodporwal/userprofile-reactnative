export type ISignupType = {
  email: string,
  password: string,
  name: string,
};

export type ISigninType = {
  userName: string,
  password: string,
};

export type IVerificationParamsType = {
  email: string,
  confirmationCode: string,
};

export type IVerificationType = {
  confirmationCode: string,
};
