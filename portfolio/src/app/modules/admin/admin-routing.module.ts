import { BaseAdminComponent } from './components/base-admin/base-admin.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component:BaseAdminComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
