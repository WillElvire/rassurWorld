import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssurVoyageComponent } from '../pages/assur-voyage/assur-voyage.component';
import { AssurSanteComponent } from '../pages/assur-sante/assur-sante.component';
import { AssurAutoComponent } from '../pages/assur-auto/assur-auto.component';
import { AssurComponent } from '../layouts/assur/assur.component';
import { AssurIndividuelComponent } from '../pages/assur-individuel/assur-individuel.component';
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
        path : '',
        redirectTo : 'voyage',
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
