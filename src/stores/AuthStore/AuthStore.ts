import { makeObservable, observable, action } from "mobx";
import { RestService } from "./rest.service";
import { IAlert, ILogin, IRegister } from "@/interfaces/interfaces";
import { USER_LOGIN, USER_REGISTER } from "@/constants/api-endpoints.constants";
import { AuthMode } from "@/enums/enums";

export class AuthStore {
  public authMode: Maybe<AuthMode>;

  public session: Maybe<string>;

  constructor() {
    this.authMode = null;

    this.session = null;

    makeObservable(this, {
      authMode: observable,
      session: observable,

      setAuthMode: action,
      setSession: action,
    });

    this.session = localStorage.getItem("session") || null;
  }

  public setAuthMode(authMode: Maybe<AuthMode>) {
    this.authMode = authMode;
  }

  public setSession(token: Maybe<string>) {
    this.session = token;
  }

  public logout() {
    localStorage.removeItem("session");
    this.setSession(null);
  }

  public async login(
    username: string,
    password: string,
  ): Promise<Maybe<IAlert>> {
    try {
      const data = {
        username,
        password,
      };
      const result = await RestService.post<ILogin>(USER_LOGIN, data);

      if (result?.data.token) {
        localStorage.setItem("session", result.data.token);
        this.setSession(result.data.token);
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
    password: string,
  ): Promise<Maybe<IAlert>> {
    try {
      const data = {
        username,
        password,
      };
      const result = await RestService.post<IRegister>(USER_REGISTER, data);
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
