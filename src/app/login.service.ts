import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private token:any

  private baseUrl = 'http://localhost:8080/login/user'; // Adjust to your backend URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, {username,password});
  }

  storeUserData(response: any) {
    this.token=response;
  }

  getCustomer(): any {
    return null;
  }

  logout() {
    localStorage.removeItem('token');
  }
}
