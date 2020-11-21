import { BaseAdminComponent } from './components/base-admin/base-admin.component';

import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component:BaseAdminComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
