import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterCustomerService } from '../register-customer.service';
import { Customer } from '../entities/Customer.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  customer: Customer={
    cname: '',
    cmobno: 0,
    cemail: '',
    cpassword: '',
  };
  

  constructor(private http: HttpClient, private router: Router,private customerService: RegisterCustomerService){}

  registerCustomer() {
    console.log(this.customer);

    this.customerService.registerCustomer(this.customer).subscribe({
      next: (res) => {
        console.log('Registration successful', res);
        alert("User registered successfully!");
      },
      error: (err) => {
        console.error('Error registering', err);
        alert("Registration failed.");
      }
    // this.http.post('localhost:8080/customer/create', this.customer).subscribe(
    //   (response) => {
    //     console.log('Customer registered:', response);
    //     alert('Registration successful! Please log in.');
    //     this.router.navigate(['/']); // Redirect to login page
    //   },
    //   (error) => {
    //     console.error('Registration failed', error);
    //     alert('Registration failed. Please try again.');
    //   }
    // );


  })
}
}
