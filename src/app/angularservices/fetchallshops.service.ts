import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchallshopsService {
  getData() {
    throw new Error('Method not implemented.');
  }

  private apiurl="http://localhost:8080/shop";

  constructor(private http:HttpClient) { }

  getAllShops():Observable<any>{
    return this.http.get(this.apiurl);
  }
}
