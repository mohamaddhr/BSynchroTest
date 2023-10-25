import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from 'src/app/models/UserModel'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://localhost:7133/api/users';

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }

  getUserByCustomerId(customerId: number): Observable<User> {
    const url = `${this.baseUrl}/${customerId}`;
    return this.http.get<User>(url);
  }
  deleteUserByCustomerId(customerId: number): Observable<void> {
    const url = `${this.baseUrl}/${customerId}`;
    return this.http.delete<void>(url);
  }

}
