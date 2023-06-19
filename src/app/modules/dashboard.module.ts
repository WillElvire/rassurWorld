import { defaultModule } from './../core/helpers/api.loader';
import { AssuranceComponent } from './../pages/dashboard/assurance/assurance.component';
import { NgModule } from "@angular/core";
import { DashboardRoutingModule } from "../routes/dashboard.routing";
import { IndexComponent } from "../pages/dashboard/index/index.component";
import { RoleComponent } from '../pages/dashboard/role/role.component';
import { TransactionComponent } from '../pages/dashboard/transaction/transaction.component';
import { OffreComponent } from '../pages/dashboard/offre/offre.component';

@NgModule({
  imports : [DashboardRoutingModule,defaultModule],
  exports : [],
  declarations : [IndexComponent,AssuranceComponent,RoleComponent,TransactionComponent,OffreComponent]
})
export class DashboardModule {

}
