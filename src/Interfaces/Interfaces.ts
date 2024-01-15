import { AlertColor } from "@mui/material";

export interface IAlert {
  severity: AlertColor;
  message: string;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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