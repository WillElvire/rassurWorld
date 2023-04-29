import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'assur',
    loadChildren: () =>
      import('./modules/assur.module').then((m) => m.AssurModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
