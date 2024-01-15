import { AlertColor } from "@mui/material";

export interface IAlert {
  severity: AlertColor;
  message: string;
}

export interface IResponse<T = any> {
  data: T;
}

export interface ILogin {
  token: null | string;
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
