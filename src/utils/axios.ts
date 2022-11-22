import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class AxiosRequest {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      timeout: 5000,
    });

    this.enableRequestInterceptor();
    this.enableResponseInterceptor();
  }

  private enableRequestInterceptor() {
    // Define the request handler
    this.instance.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        // Add customized header like token
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  private enableResponseInterceptor() {
    // Define the response handler
    this.instance.interceptors.response.use(
      () => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return Response;
      },
      (error) => {
        // Any status codes fails outside the range of 2xx cause this function to trigger
        // Do something with response data
        // Add Handler for different error status code
        return Promise.reject(error);
      }
    );
  }

  public get(
    url: string,
    queryParams?: object,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return this.instance.get(url, {
      ...config,
      params: queryParams,
    });
  }

  public post(
    url: string,
    payload: object,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return this.instance.post(url, payload, config);
  }

  public put(
    url: string,
    payload: object,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return this.instance.put(url, payload, config);
  }

  public patch(
    url: string,
    payload: object,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return this.instance.patch(url, payload, config);
  }

  public delete(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return this.instance.delete(url, config);
  }
}

export default new AxiosRequest();
