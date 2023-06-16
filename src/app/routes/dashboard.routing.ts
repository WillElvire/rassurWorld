import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "../layouts/admin/admin.component";
import { IndexComponent } from "../pages/dashboard/index/index.component";

const routes : Routes = [
 {
  path : '',
  component : AdminComponent,
  children : [
   {
     path :"index",
     component : IndexComponent
   },
   {
    path : '',
    redirectTo : 'index',
    pathMatch : 'full'
   }
  ]
 }
]

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})
export class DashboardRoutingModule {

}
