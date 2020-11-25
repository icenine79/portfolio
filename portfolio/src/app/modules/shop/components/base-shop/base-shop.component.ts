import { Categories } from './../../models/Categories';
import { Product } from './../../models/Product';
import { ShoppingService } from './../../services/shopping.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-base-shop',
  templateUrl: './base-shop.component.html',
  styleUrls: ['./base-shop.component.css']
})
export class BaseShopComponent implements OnInit {
categories:Categories[]=[];
products:Product[]=[];
filteredProducts:Product[]=[];
category:string;
  constructor(private shoppingService: ShoppingService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.shoppingService.getCategories()
    .subscribe(cat=>{
      this.categories=cat['categories']
    });
    this.shoppingService.getProducts();
    this.shoppingService.getUpdatedProductsListner()
    .subscribe(data=>{
      this.products=data;
    });

      // tslint:disable-next-line: align
      this.route.queryParamMap
      .subscribe(params=>{
        this.category = params.get('category');
        console.log(this.category)
        this.filteredProducts = (this.category)?
        this.products.filter(p=>p.category===this.category):
        this.products;
      });
    }

  addToCart(product:Product){


  }


}
