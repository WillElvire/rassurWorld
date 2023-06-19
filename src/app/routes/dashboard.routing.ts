import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "../layouts/admin/admin.component";
import { IndexComponent } from "../pages/dashboard/index/index.component";
import { AssuranceComponent } from "../pages/dashboard/assurance/assurance.component";
import { OffreComponent } from "../pages/dashboard/offre/offre.component";
import { RoleComponent } from "../pages/dashboard/role/role.component";
import { TransactionComponent } from "../pages/dashboard/transaction/transaction.component";
import { AdminGuard } from "../core/guard/admin.guard";

const routes : Routes = [
 {
  path : '',
  component : AdminComponent,
  canActivate : [AdminGuard],
  children : [
   {
     path :"index",
     component : IndexComponent
   },
   {
     path : "assurance/:type",
     component : AssuranceComponent
   },
   {
     path : "offre",
     component : OffreComponent
   },
   {
     path : "role",
     component : RoleComponent
   },
   {
     path : "transaction",
     component : TransactionComponent
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
