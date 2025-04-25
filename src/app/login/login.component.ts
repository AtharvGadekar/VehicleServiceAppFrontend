import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  customer:any;
  constructor(private service:LoginService, private router:Router) {}

  onSubmit() {
    console.log(this.username+" "+this.password)
    this.customer=this.service.login(this.username,this.password).subscribe(
      (response)=>{
        console.log(response)
        const token=response.jwtToken;
        const customer=response.customer;
        const vehicles=response.vehicles
        if(response){
          localStorage.setItem('token',token);
          localStorage.setItem('customer',JSON.stringify(customer) );
          localStorage.setItem('vehicles',JSON.stringify(vehicles) );
          this.router.navigate(['/customer'])
        }
        
        
      },(error)=>{
        console.error("API error",error)
      });
  }
}
