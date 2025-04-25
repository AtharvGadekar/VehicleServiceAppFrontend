import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerAddress } from './entities/CustomerAddress.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerAddressService {

  
  private baseUrl = 'http://localhost:8080/caddress'; // Adjust your backend URL
  
  constructor(private http: HttpClient) { }

  registerCustomerAddress(cid:number, customeraddress: CustomerAddress): Observable<any> {
    return this.http.post(`${this.baseUrl}/${cid}`, customeraddress);
  }
  
}
