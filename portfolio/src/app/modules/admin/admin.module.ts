import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseAdminComponent } from './components/base-admin/base-admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { ProductListComponent } from './components/product-list/product-list.component';



@NgModule({
  declarations: [BaseAdminComponent, UsersTableComponent, ProductListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
