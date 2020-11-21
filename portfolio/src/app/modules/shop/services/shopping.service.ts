import { ShoppingCartItem } from './../models/ShoppingCartItem';
import { Product } from './../models/Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
items: ShoppingCartItem[]=[];
updatedItems = new Subject<ShoppingCartItem[]>()
  constructor(private http:HttpClient) { }

  getCategories(){
    return this.http.get<any>('./assets/jsons/categories.json');
  }
  getProducts(){
    return this.http.get<any>('./assets/jsons/products.json');
  }

  getUpdatedItemsListner(){
    return this.updatedItems.asObservable();
  }
  addToCart(product:ShoppingCartItem){
    this.http.post<{ message: string, cartId:string, item:any}>('http://localhost:3000/api/shoppingCartItem', product)
    .subscribe(responseData=>{
      const id = responseData.cartId;
      product.id = id;
      this.items.push(product);
      this.updatedItems.next([...this.items]);
      console.log(responseData.message);
    });
  }



}
