import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl = 'http://localhost:8080/api/auth/login';
  constructor(private http: HttpClient,private router: Router) { }

  logounavbar() {
    // Clear token or any user session data from local storage
    localStorage.removeItem('token'); // Remove JWT token
    localStorage.removeItem('user');  // Remove user details if stored

    // Optionally clear session storage if you used it
    sessionStorage.clear();

    // Redirect user to login page
    this.router.navigate(['/login']);
  }

  login(email: string, password: string) {
    return this.http.post<{ token: string }>(this.apiUrl, { email, password });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
