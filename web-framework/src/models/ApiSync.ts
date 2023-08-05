import axios, { AxiosPromise } from 'axios';

// We're adding a constraint to make sure that whatever is passed in, has an ID
interface HasId {
  id?: number;
}

// We can only use class Sync with some type that will have an ID property that is a number
export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
