import { IResponse } from "../../interfaces/interfaces";

class RestService {
  static async get<T>(url: string, params?: object): Promise<IResponse<T>> {
    return RestService.request(url, "GET", params);
  }

  static async post<T>(url: string, data: object): Promise<IResponse<T>> {
    return RestService.request(url, "POST", data);
  }

  static async request<T>(
    url: string,
    method: string,
    data?: object,
  ): Promise<IResponse<T>> {
    const requestOptions: RequestInit = {
      method,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (data) {
      requestOptions.body = JSON.stringify(data);
    }

    const response = await fetch(url, requestOptions);
    const result = await response.json();

    return result;
  }
}

export default RestService;
