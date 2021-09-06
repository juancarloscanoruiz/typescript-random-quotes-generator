import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';

export class Request {
    private instance: AxiosInstance;

    constructor() {
        this.instance = axios.create();
    }

    public get(url: string, options?: AxiosRequestConfig): AxiosPromise {
       return this.instance.get(url, options); 
    }

    public post(url: string, options?: AxiosRequestConfig): AxiosPromise {
        return this.instance.post(url, options);
    }
}