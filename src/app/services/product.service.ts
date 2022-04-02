import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // get all()
  get() {
    return this.http.get(apiUrl);
  }

  // detail
  show(id: number | string) {
    return this.http.get(`${apiUrl}/${id}`); //https://localhost:3000/students/1
  }

  // create
  store(data: any) {
    return this.http.post(apiUrl, data);
  }

  // remove
  destroy(id: number | string) {
    return this.http.delete(`${apiUrl}/${id}`); //https://localhost:3000/students/1
  }

  update(id: number | string, data: any) {
    return this.http.put(`${apiUrl}/${id}`, data); //https://localhost:3000/students/1
  }
}
