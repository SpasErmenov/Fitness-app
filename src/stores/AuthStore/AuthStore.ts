import { makeObservable, observable, action } from "mobx";
import {
  USER_LOGIN,
  USER_REGISTER,
} from "../../constants/api-endpoints.constants";
import { IAlert, ILogin, IRegister } from "../../Interfaces/Interfaces";
import RestService from "./rest.service";
import { AuthMode } from "../../enums/enums";

export class AuthStore {
  public authMode: AuthMode | null;
  public session: string | null;

  constructor() {
    this.authMode = null;

    makeObservable(this, {
      authMode: observable,
      session: observable,

      setAuthMode: action,
      setSessionToken: action
    });

    this.session = localStorage.getItem('session') || null;
  }

  public setAuthMode(authMode: AuthMode | null) {
    this.authMode = authMode;
  }

  public setSessionToken(token: string | null) {
    this.session = token;
  }

  public logout() {
    localStorage.removeItem("session");
    this.setSessionToken(null);
  }

  public async login(
    username: string,
    password: string
  ): Promise<IAlert | null> {
    try {
      const data = {
        username,
        password,
      };
      const result = await RestService.post<ILogin>(
        USER_LOGIN,
        data
      );

      if (result?.data.token) {
        localStorage.setItem("session", result.data.token);        
        this.setSessionToken(result.data.token);
        return { severity: "success", message: result.data.message };
      } else {
        return { severity: "error", message: result.data.message };
      }
    } catch (error) {
      if (error instanceof Error && error.message.includes("401")) {
        return { severity: "error", message: "Invalid credentials!" };
      } else {
        console.error(error);
        return { severity: "error", message: "An unexpected error occurred." };
      }
    }
  }

  public async register(
    username: string,
    password: string
  ): Promise<IAlert | null> {
    try {
      const data = {
        username,
        password,
      };
      const result = await RestService.post<IRegister>(
        USER_REGISTER,
        data
      );
      if (result?.data.registered) {
        return { severity: "success", message: result.data.message };
      } else {
        return { severity: "error", message: result.data.message };
      }
    } catch (error) {
      console.error(error);
      return { severity: "error", message: "An unexpected error occurred." };
    }
  }
}
