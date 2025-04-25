import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './entities/Customer.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterCustomerService {


  private baseUrl = 'http://localhost:8080/customer'; // Adjust your backend URL

  constructor(private http: HttpClient) { }

  registerCustomer(customer: Customer): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, customer);
  }
}
