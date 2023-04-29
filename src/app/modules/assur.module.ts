import { NgModule } from "@angular/core";
import { AssurAutoComponent } from '../pages/assur-auto/assur-auto.component';
import { AssurSanteComponent } from '../pages/assur-sante/assur-sante.component';
import { AssurVoyageComponent } from '../pages/assur-voyage/assur-voyage.component';

@NgModule({
  imports : [],
  exports : [],
  declarations : [
    AssurAutoComponent,
    AssurSanteComponent,
    AssurVoyageComponent
  ]
})
export class AssurModule {

}
