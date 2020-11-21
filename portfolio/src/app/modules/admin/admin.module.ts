import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseAdminComponent } from './components/base-admin/base-admin.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [BaseAdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
