import { Component } from '@angular/core';
import { ShopdataService } from '../shopdata.service';
import { HttpClient } from '@angular/common/http';
import { FetchallshopsService } from '../angularservices/fetchallshops.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent {

  searchText:string="";
  data: any[] = [];
  filteredData:any[]=[];
  public getJsonValue:any;
  public postJsonValue:any;

  constructor(private apiService:ShopdataService,private allshopdata:FetchallshopsService){}

  ngOnInit(): void {
    this.fetchAllData();
    // this.fetchData();
  }

  fetchAllData():void{
    this.allshopdata.getAllShops().subscribe(
      (response)=>{
        this.data=response;
        this.filteredData=this.data;
      },
      (error)=>{
        console.error('API error:',error);
      }
    );
    console.log(this.data);
  }

  fetchData(): void {
    this.apiService.getData().subscribe(
      (response) => {
      this.data = response;  // Store the response in the 'shops' property
      this.filteredData=this.data;
    },
    (error) => {
      console.error('API Error:', error);
    });
    console.log(this.data);
  }

  searchShops(){
    this.filteredData = this.data.filter(item =>
      item.shopaddress.city.toLowerCase().includes(this.searchText.toLowerCase())
      
    );
    console.log(this.searchText)
    console.log(this.filteredData)
  }
}
