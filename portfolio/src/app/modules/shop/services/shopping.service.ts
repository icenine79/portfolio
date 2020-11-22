import { map } from 'rxjs/operators';
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
this.http.get<{message:string, products:any}>('http://localhost:3000/api/posts')
.pipe(map(responseData=>{
  return responseData.products.map(product=>{
    return {
      id: product._id,
      name: product.name,
      category: product.category,
      description: product.description,
      imageUrl: product.imageUrl,
      price: product.price
    }
  });
})).subscribe(newResponse=>{
  this.products=newResponse;
  this.updatedProducts.next([...this.products]);
})

}

  getUpdatedProductsListner(){
    return this.updatedProducts.asObservable();
  }

addToCart(product:Product){
  console.log(product)
}


}
