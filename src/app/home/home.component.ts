import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router:Router){
  }
  goToCustomerUI() {
    // Navigate to Customer UI page
    this.router.navigate(['/customer-ui']);
  }

  goToShopUI() {
    // Navigate to Shop UI page
    this.router.navigate(['/shop-ui']);
  }
}
