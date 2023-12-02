import { RegisterComponent } from './pages/auth/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path : 'success',
    loadComponent : ()=> import('./pages/landings/success/success.component').then((c)=>c.SuccessComponent)
  },
  {
    path : 'auth/login',
    loadComponent : ()=> import('./pages/auth/login/login.component').then((c)=>c.LoginComponent)
  },
  {
    path : 'auth/register',
    loadComponent : ()=> import('./pages/auth/register/register.component').then((c)=>c.RegisterComponent)
  },
  {
    path : 'payment/:id',
    loadComponent : ()=> import('./pages/landings/payment/payment.component').then((c)=>c.PaymentComponent)
  },
  {
    path : 'transaction/success',
    loadComponent : ()=> import('./pages/landings/transaction/successfull/successfull.component').then((c)=>c.SuccessfullComponent)
  },
  {
    path : 'transaction/failed',
    loadComponent : ()=> import('./pages/landings/transaction/failed/failed.component').then((c)=>c.FailedComponent)
  },
  {
    path: 'assurance',
    loadChildren: () => import('./modules/assur.module').then((m) => m.AssurModule),
  },
  {
    path : '',
    redirectTo : 'assurance',
    pathMatch : 'full'

  },
  {
    path : '**',
    redirectTo : 'assurance',
    pathMatch : 'full'

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
