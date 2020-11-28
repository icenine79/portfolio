import { AdminGuardService } from './../shared/guards/admin-guard.service';
import { AuthGuardService } from './../shared/guards/auth-guard.service';
import { BaseAdminComponent } from './components/base-admin/base-admin.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component:BaseAdminComponent, canActivate: [AuthGuardService, AdminGuardService]},
  {path:'edit/:postId', component:BaseAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
