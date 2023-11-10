import { NgModule } from "@angular/core";
import { AssurAutoComponent } from '../pages/assurance/assur-auto/assur-auto.component';
import { AssurSanteComponent } from '../pages/assurance/assur-sante/assur-sante.component';
import { AssurVoyageComponent } from '../pages/assurance/assur-voyage/assur-voyage.component';
import { AssurRoutingModule } from "../routes/assur.services.routing";
import { NgZoroModule } from "./ngzoro.module";
import { CommonModule } from "@angular/common";
import { defaultModule } from "../core/helpers/api.loader";
import { AssurIndividuelComponent } from '../pages/assurance/assur-individuel/assur-individuel.component';
import { AssurDefaultComponent } from '../pages/assurance/assur-default/assur-default.component';

@NgModule({
  imports : [AssurRoutingModule,NgZoroModule,CommonModule,defaultModule],
  exports : [defaultModule],
  declarations : [
    AssurAutoComponent,
    AssurSanteComponent,
    AssurVoyageComponent,
    AssurIndividuelComponent,
    AssurDefaultComponent
  ]
})
export class AssurModule {

}
