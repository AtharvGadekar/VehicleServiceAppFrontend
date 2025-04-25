import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopdataService } from '../shopdata.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  shop:any;
  
  ngOnInit(): void {
    const shopId = this.route.snapshot.paramMap.get('id'); // Get shop ID from URL
    if (shopId) {
      this.shopService.getShopById(shopId).subscribe(data => {
        this.shop = data; // Assign fetched shop details
      });
    }
  }

  constructor(
    private route: ActivatedRoute,
    private shopService: ShopdataService
  ) {}
}
