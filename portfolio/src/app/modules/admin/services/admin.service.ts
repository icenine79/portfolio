import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  products: any[]=[];
  updatedProducts = new Subject<any[]>()
    constructor(private http:HttpClient) { }


    getUpdatedProductsListner(){
      return this.updatedProducts.asObservable();
    }

  addProduct(product:any){
    console.log(product)

    this.http.post<{message:string, productId:string, product:any}>('http://localhost:3000/api/admin', product)
    .subscribe(responseData=>{
      const id=responseData.productId;
      product.id=id;
      this.products.push(product);
      this.updatedProducts.next([...this.products])
      console.log(responseData.message)
    })
  }
  getProductById(id:string):Observable<any>{
    return
  }
  getProducts(){
    this.http.get<{message:string, products:any}>('http://localhost:3000/api/admin')
    .pipe(map(productsData=>{
      return productsData.products.map(product=>{
        return{
          id: product._id,
          name: product.name,
          category: product.category,
          description: product.description,
          imageUrl: product.imageUrl,
          price: product.price
        }
      })
    })).subscribe(transformedData=>{
      this.products=transformedData;
      this.updatedProducts.next([...this.products]);
    })

  }
  deleteProduct(id:string){
    this.http.delete<{message:string}>('http://localhost:3000/api/admin/'+id)
    .subscribe(()=>{
      const updatedProducts = this.products.filter(p=>p.id!==id);
      this.products = updatedProducts;
      this.updatedProducts.next([...this.products]);
    });
  }

deleteUser(id:string){
  return this.http.delete<{message:string}>('http://localhost:3000/api/user/'+id)
}

}
