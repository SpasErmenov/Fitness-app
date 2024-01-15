export const SERVER_URL = import.meta.env.VITE_SERVER_URL;
export const SERVER_URL_USER_REGISTER = `${import.meta.env.VITE_SERVER_URL}/users/register`
export const SERVER_URL_USER_LOGIN = `${import.meta.env.VITE_SERVER_URL}/users/login`
export const SERVER_URL_EXERCISES_FETCH_ALL = `${import.meta.env.VITE_SERVER_URL}/exercises/all`

// Password constants
export const MIN_PASSWORD_LENGTH = 6;
export const MAX_PASSWORD_LENGTH = 16;

// Username constants
export const MIN_USERNAME_LENGTH = 3; 
export const MAX_USERNAME_LENGTH = 10;
