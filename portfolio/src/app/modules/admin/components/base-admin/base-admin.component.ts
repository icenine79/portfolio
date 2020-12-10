import { Messages } from './../../../../models/Messages';
import { HomeService } from './../../../../app-components/services/home.service';
import { AuthService } from './../../../shared/services/auth.service';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-base-admin',
  templateUrl: './base-admin.component.html',
  styleUrls: ['./base-admin.component.css']
})
export class BaseAdminComponent implements OnInit {
  products:any[]=[];
  messages:Messages[]=[]
productForm:FormGroup;
categories:any[]=['games','electronics','books'];
users:User[]=[]
filteredUsers:User[]=[]
private mode = 'create';
private productId:string;
product:any;
  constructor(
    private adminService: AdminService,
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private auth:AuthService,
    private homeService: HomeService) { }

  ngOnInit(): void {
    this.adminService.getProducts();
    this.adminService.getUpdatedProductsListner()
    .subscribe(products=>{
      this.products=products;
      console.log(this.products)
    })
    this.productFormBuilder();
    this.getUsers();
    this.homeService.getMessages();
    this.homeService.getUpdatedMessagesListner()
    .subscribe(messages=>{
      this.messages=messages;
    })

     // tslint:disable-next-line: align
     this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      if(paramMap.has('productId')){
        this.mode="edit";
        this.productId = paramMap.get('productId');
        this.product = this.adminService.getProductById(this.productId)
      }else{
        this.mode="create";
        this.productId=null;
        console.log(this.mode)
      }
    })
}
receivedId(id){
  this.adminService.deleteUser(id)
  .subscribe(()=>{
    this.users =this.users.filter(u=>u.id!==id)
  })

}

receivedProduct(product){
  this.adminService.deleteProduct(product)

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



productFormBuilder(){
  this.productForm = this.fb.group({
    name:['',Validators.required],
    category:['', Validators.required],
    description:['', Validators.required],
    imageUrl:['./assets/images/', Validators.required],
    price:[0, Validators.required]
  });
}



editProduct(id:string, params:any){

}


getUsers(){
 // this.auth.getUsers();
  this.auth.getUpdatedUsersListner()
  .subscribe(data=>{
    this.users=  data;
    console.log(this.users)
  });
}

deleteProduct(id:string){
  this.adminService.deleteProduct(id)
}
}
