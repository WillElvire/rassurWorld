import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'assurance',
    loadChildren: () =>
      import('./modules/assur.module').then((m) => m.AssurModule),
  },
  {
    path : '',
    redirectTo : 'assurance',
    pathMatch : 'full'

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
