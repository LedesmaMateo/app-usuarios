import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {
  url = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get<any>(`${this.url}/users`);
  }

  getUserId(id:number): Observable<any>{
    return this.http.get<any>(`${this.url}/users/${id}`);
  }

  getPublicaciones(id:number): Observable<any>{
    return this.http.get<any>(`${this.url}/posts?userId=${id}`);
  }

  getPublicacion(id:number): Observable<any>{
    return this.http.get<any>(`${this.url}/posts/${id}`)
  }

  getComentarios(id:number): Observable<any>{
    return this.http.get<any>(`${this.url}/comments?postId=${id}`);
  }

}
