import { Component } from '@angular/core';
import { FetchAppointmentsService } from '../angularservices/fetch-appointments.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {


  data :any[]=[];
  expandedIndexes: boolean[] = [];

  private customer : any;

  constructor(private appser:FetchAppointmentsService){}

  ngOnInit():void{
    const customerData = localStorage.getItem('customer');
    this.customer = customerData ? JSON.parse(customerData):null;
    this.fetchAppointments(this.customer.cid);
  }

  fetchAppointments(id:any):void{
    this.appser.getAppointments(id).subscribe(
      (response)=>{
        this.data=response;
      },
      (error)=>{
        console.log("API error"+error)
      }
    )
  }
  toggleDetails(index: number): void {
    this.expandedIndexes[index] = !this.expandedIndexes[index];
  }
}
