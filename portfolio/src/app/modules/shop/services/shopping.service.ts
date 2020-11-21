import { ShoppingCartItem } from './../models/ShoppingCartItem';
import { Product } from './../models/Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
products: Product[]=[];
updatedProducts = new Subject<Product[]>()
  constructor(private http:HttpClient) { }

  getCategories(){
    return this.http.get<any>('./assets/jsons/categories.json');
  }
  getProducts(){
    return this.http.get<any>('./assets/jsons/products.json');
  }

  getUpdatedProductsListner(){
    return this.updatedProducts.asObservable();
  }
  /* addToCart(product:ShoppingCartItem){
    this.http.post<{ message: string, cartId:string}>('http://localhost:3000/api/shoppingCartItem', product)
    .subscribe(responseData=>{
      const id = responseData.cartId;
      product.id = id;
      this.items.push(product);
      this.updatedItems.next([...this.items]);
      console.log(responseData.message);
    });
  } */
addProduct(product:Product){
  this.http.post<{message:string, productId:string, product:any}>('http://localhost:3000/api/products', product)
  .subscribe(responseData=>{
    const id=responseData.productId;
    product.id=id;
    this.products.push(product);
    this.updatedProducts.next([...this.products])
    console.log(responseData.message)
  })
}


}
