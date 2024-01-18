import { IResponse } from "@/interfaces/interfaces";

export class RestService {
  static async get<T, V = undefined>(
    url: string,
    body?: V,
  ): Promise<IResponse<T>> {
    return RestService.request(url, "GET", body);
  }

  static async post<T, V = undefined>(
    url: string,
    body: V,
  ): Promise<IResponse<T>> {
    return RestService.request(url, "POST", body);
  }

  static async request<T, V = undefined>(
    url: string,
    method: string,
    body?: V,
  ): Promise<IResponse<T>> {
    const requestOptions: RequestInit = {
      method,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      requestOptions.body = JSON.stringify(body);
    }

    const response = await fetch(url, requestOptions);
    const result = await response.json();

    return result;
  }
}
