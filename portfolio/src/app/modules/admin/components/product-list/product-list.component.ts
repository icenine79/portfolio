import { Product } from './../../../shop/models/Product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
@Input() products: Product[]=[]
@Output() change= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct(product){
    this.change.emit(product)
  }


}
