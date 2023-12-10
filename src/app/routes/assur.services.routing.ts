import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssurVoyageComponent } from '../pages/assurance/assur-voyage/assur-voyage.component';
import { AssurSanteComponent } from '../pages/assurance/assur-sante/assur-sante.component';
import { AssurAutoComponent } from '../pages/assurance/assur-auto/assur-auto.component';
import { AssurComponent } from '../layouts/assur/assur.component';
import { AssurIndividuelComponent } from '../pages/assurance/assur-individuel/assur-individuel.component';
import { AssurDefaultComponent } from '../pages/assurance/assur-default/assur-default.component';
const routes: Routes = [
  {
    path :'',
    component : AssurComponent,
    children : [
      {
        path: 'voyage',
        component: AssurVoyageComponent,
      },
      {
        path : 'sante',
        component : AssurSanteComponent
      },
      {
        path : 'individuel',
        component : AssurIndividuelComponent
      },
      {
        path : 'auto',
        component : AssurAutoComponent
      },
      {
        path : 'default',
        component : AssurDefaultComponent
      },
      {
        path : '',
        redirectTo : 'default',
        pathMatch : 'full'
      }
    ]
  }

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class AssurRoutingModule {}
