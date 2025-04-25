import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  customer: any;
  vehicles: any[] | undefined;
  data:any;

  constructor() {}

  ngOnInit(): void {
    
    const customerData = localStorage.getItem('customer');
    const vehicleData = localStorage.getItem('vehicles');
    this.vehicles = vehicleData ? JSON.parse(vehicleData):null;
    this.customer = customerData ? JSON.parse(customerData):null;
    this.data=this.customer.cAddress;
  }
}
