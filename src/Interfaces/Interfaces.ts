import { AlertColor } from "@mui/material";

export interface IAlert {
  severity: AlertColor;
  message: string;
}

export interface IResponse<T = unknown> {
  data: T;
}

export interface ILogin {
  token: Maybe<string>;
  message: string;
}

export interface IRegister {
  registered: boolean;
  message: string;
}

export interface IExercise {
  id: number;
  name: string;
}

export interface IUsers {
  id: number;
  name: string;
  imgPath: string;
}

export interface IAuthPayload {
  username: string;
  password: string;
}
