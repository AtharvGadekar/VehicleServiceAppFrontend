import { Component } from '@angular/core';
import { CustomerAddressService } from '../customer-address.service';
import { CustomerAddress } from '../entities/CustomerAddress.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  customer: any;
  data:any;
  custaddoutput:CustomerAddress={
    address:'',
    areaname:'',
    city:'',
    pincode:0,
  }

  custadd:CustomerAddress={
    address:'',
    areaname:'',
    city:'',
    pincode:0,
  }

  constructor(private custaddser:CustomerAddressService,private router:Router) {}

  ngOnInit(): void {
    
    const customerData = localStorage.getItem('customer');
    this.customer = customerData ? JSON.parse(customerData):null;
    this.data=this.customer.cAddress;
  }
  // addAddress(){
  //   this.custaddser.registerCustomerAddress(this.customer.cid,this.custadd)
  // }
  onSubmit() {
    console.log(this.custadd)
    this.custaddser.registerCustomerAddress(this.customer.cid,this.custadd).subscribe(
      (response)=>{
        alert('Address added successfully')
        console.log(response)
      },(error)=>{
        console.log("API error:",error)
      }
    );

  }
  
}
        // // Placeholder array to store addresses
        // const addresses = [];

        // // Function to add address
        // function addAddress() {
        //     const street = document.getElementById("street").value;
        //     const city = document.getElementById("city").value;
        //     const state = document.getElementById("state").value;
        //     const zip = document.getElementById("zip").value;

        //     // Validate input fields
        //     if (!street || !city || !state || !zip) {
        //         alert("Please fill in all fields");
        //         return;
        //     }

        //     // Create an address object and add it to the list
        //     const address = {
        //         street: street,
        //         city: city,
        //         state: state,
        //         zip: zip
        //     };
        //     addresses.push(address);

        //     // Reset form
        //     document.getElementById("addressForm").reset();

        //     // Display the updated address list
        //     displayAddresses();
        // }

        // // Function to display the addresses
        // function displayAddresses() {
        //     const addressList = document.getElementById("addressList");
        //     addressList.innerHTML = "<h2>Your Saved Addresses</h2>"; // Reset address list

        //     addresses.forEach((address, index) => {
        //         const addressItem = document.createElement("div");
        //         addressItem.className = "address-item";
        //         addressItem.innerHTML = `
        //             <h3>${address.street}</h3>
        //             <p>City: ${address.city}</p>
        //             <p>State: ${address.state}</p>
        //             <p>ZIP Code: ${address.zip}</p>
        //             <button onclick="removeAddress(${index})">Remove</button>
        //         `;
        //         addressList.appendChild(addressItem);
        //     });
        // }

        // // Function to remove an address from the list
        // function removeAddress(index) {
        //     addresses.splice(index, 1); // Remove the address from the array
        //     displayAddresses(); // Update the displayed list
        // }