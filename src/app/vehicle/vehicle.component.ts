import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit{
  vehicles:any[] | undefined;

  constructor() {}

  ngOnInit(): void {
    
    const vehicleData = localStorage.getItem('vehicles');
    this.vehicles = vehicleData ? JSON.parse(vehicleData):null;
  }
}
