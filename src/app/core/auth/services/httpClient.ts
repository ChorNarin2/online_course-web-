import axios, { AxiosResponse } from 'axios';
import { from, Observable } from 'rxjs';

export class HttpClient {
  constructor() {}

  get(url: string): Promise<any> {
    return axios.get(url).then(response => this.handleResponse(response));
  }

  post(url: string, body: any): Observable<any> {
    return from(
      axios.post(url, body, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => this.handleResponse(response))
    )
  }

  put(url: string, body: any): Promise<any> {
    return axios.put(url, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => this.handleResponse(response));
  }

  delete(url: string): Promise<any> {
    return axios.delete(url).then(response => this.handleResponse(response));
  }

  private handleResponse(response: AxiosResponse): Promise<any> {
    if (response.status < 200 || response.status >= 300) {
      return Promise.reject(`Error: ${response.statusText}`);
    }
    return Promise.resolve(response.data);
  }
}