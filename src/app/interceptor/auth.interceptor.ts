import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router : Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = localStorage.getItem('token')

    

    if(token){

      if (this.isTokenExpired(token)) {
        this.clearSession();
        // Optionally, navigate to login immediately if token is expired
        this.router.navigate(['/login']);
        // Optionally, you can throw an error here to stop further processing
        return throwError(() => new Error('Token expired'));
      }

      const clonedRequest = request.clone({
        setHeaders:{
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(clonedRequest);
    }

    return next.handle(request);
  }
  private isTokenExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      // Assuming the token contains an "exp" field with the expiration time in seconds
      return payload.exp * 1000 < Date.now();
    } catch (error) {
      // If token parsing fails, consider it expired for safety
      return true;
    }
  }
  private clearSession() {
    // Clear token and customer data from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('customer');
  }

  private handleError(error: any): Observable<never> {
    if (error instanceof HttpErrorResponse && error.status === 401) {
      this.clearSession();
      this.router.navigate(['/login']);
    }
    return throwError(() => error);
  }
}
