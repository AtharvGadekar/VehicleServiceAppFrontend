import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authServiceService:AuthServiceService,private router : Router){
  }
  
  logout(): void {
    // Remove token and customer details from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('customer');
    
    // Optionally, you can navigate to the login page after logging out
    this.router.navigate(['/login']);
  }
}
