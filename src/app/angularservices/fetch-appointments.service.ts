import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchAppointmentsService {

  constructor(private http:HttpClient) { }

  private apiUrl="http://localhost:8080/appointment/customer";

  getAppointments(id:String):Observable<any>{
      return this.http.get(`${this.apiUrl}/${id}`);
    }
}
