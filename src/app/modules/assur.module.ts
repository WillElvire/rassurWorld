import { NgModule } from "@angular/core";
import { AssurAutoComponent } from '../pages/assur-auto/assur-auto.component';
import { AssurSanteComponent } from '../pages/assur-sante/assur-sante.component';
import { AssurVoyageComponent } from '../pages/assur-voyage/assur-voyage.component';
import { AssurRoutingModule } from "../routes/assur.services.routing";

@NgModule({
  imports : [AssurRoutingModule],
  exports : [],
  declarations : [
    AssurAutoComponent,
    AssurSanteComponent,
    AssurVoyageComponent
  ]
})
export class AssurModule {

}
