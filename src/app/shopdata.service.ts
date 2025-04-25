import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopdataService {

  private apiUrl = "http://localhost:8080/shop";

  constructor(private http: HttpClient) { 
    
  }

  getShopById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
