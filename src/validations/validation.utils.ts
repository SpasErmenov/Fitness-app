import {
  MAX_PASSWORD_LENGTH,
  MAX_USERNAME_LENGTH,
  MIN_PASSWORD_LENGTH,
  MIN_USERNAME_LENGTH,
} from "../validations/validation.constants";

export const usernameValidationError = (username: string): boolean => {
  return (
    username.length > 0 &&
    (username.length < MIN_USERNAME_LENGTH ||
      username.length > MAX_USERNAME_LENGTH)
  );
};

export const usernameValidationHelper = (username: string): Maybe<string> => {
  if (username.length > 0 && username.length < MIN_USERNAME_LENGTH) {
    return `Username must be at least ${MIN_USERNAME_LENGTH} characters`;
  }
  if (username.length > MAX_USERNAME_LENGTH) {
    return `Username must be at most ${MAX_USERNAME_LENGTH} characters`;
  }
  return null;
};

export const passwordValidationError = (password: string): boolean => {
  return (
    password.length > 0 &&
    (password.length < MIN_PASSWORD_LENGTH ||
      password.length > MAX_PASSWORD_LENGTH)
  );
};

export const passwordValidationHelper = (password: string): Maybe<string> => {
  if (password.length > 0 && password.length < MIN_PASSWORD_LENGTH) {
    return `Password must be at least ${MIN_PASSWORD_LENGTH} characters`;
  }
  if (password.length > MAX_PASSWORD_LENGTH) {
    return `Password must be at most ${MAX_PASSWORD_LENGTH} characters`;
  }
  return null;
};

export const passwordRepeatValidationError = (
  password: string,
  passwordRepeat: string,
): boolean => {
  if (!passwordRepeat.length) {
    return false;
  }
  if (password !== passwordRepeat) {
    return true;
  }
  return passwordValidationError(password);
};

export const passwordRepeatValidationHelper = (
  password: string,
  passwordRepeat: string,
): Maybe<string> => {
  if (!passwordRepeat.length) {
    return null;
  }
  if (password !== passwordRepeat) {
    return "Password missmatch!";
  }
  return passwordValidationHelper(password);
};
