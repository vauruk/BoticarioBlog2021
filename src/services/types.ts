export interface IHttpClientRequestParameters<T> {
    path: string;
    token: string;
    payload?: T;
}
