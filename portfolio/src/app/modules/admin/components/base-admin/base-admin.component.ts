import { AuthService } from './../../../shared/services/auth.service';
import { Product } from './../../../shop/models/Product';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-base-admin',
  templateUrl: './base-admin.component.html',
  styleUrls: ['./base-admin.component.css']
})
export class BaseAdminComponent implements OnInit {
  products:Product[]=[];
productForm:FormGroup;
categories:any[]=['games','electronics','books'];
users:User[]=[]
  constructor(private adminService: AdminService, private fb:FormBuilder, private auth:AuthService) { }

  ngOnInit(): void {
    this.adminService.getProducts();
    this.adminService.getUpdatedProductsListner()
    .subscribe(products=>{
      this.products=products;
      console.log(this.products)
    })
    this.productFormBuilder();
    this.getUsers();

}
categorySelect(category){
  console.log(category)
}
get name(){return this.productForm.get('name')}
get category(){return this.productForm.get('category')}
get description(){return this.productForm.get('description')}
get imageUrl(){return this.productForm.get('imageUrl')}
get price(){return this.productForm.get('price')}

onSubmit(){
  let product ={
    name: this.name.value,
    category:this.category.value,
    description:this.description.value,
    imageUrl: this.imageUrl.value,
    price: this.price.value
  }
  this.adminService.addProduct(product)

}
deleteProduct(id:string){
this.adminService.deleteProduct(id)
}


productFormBuilder(){
  this.productForm = this.fb.group({
    name:['',Validators.required],
    category:['', Validators.required],
    description:['', Validators.required],
    imageUrl:['./assets/images/', Validators.required],
    price:[0, Validators.required]
  });
}



getUsers(){
  this.auth.getUsers();
  this.auth.getUpdatedUsersListner()
  .subscribe(data=>{
    this.users=data;
    console.log(this.users)
  });
}

}
