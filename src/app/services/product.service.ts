import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiUrl = 'http://localhost:3000/phones';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // get all()
  get(params:string|number) {
    return this.http.get(apiUrl+params);
  }
  
  // detail
  show(id: number | string,params:string) {
    console.log(`${apiUrl}/${id}`+params);
    return this.http.get(`${apiUrl}/${id}`+params); //https://localhost:3000/students/1
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
