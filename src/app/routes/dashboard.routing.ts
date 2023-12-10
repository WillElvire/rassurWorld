import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../layouts/admin/admin.component';
import { IndexComponent } from '../pages/dashboard/index/index.component';
import { AssuranceComponent } from '../pages/dashboard/assurance/assurance.component';
import { OffreComponent } from '../pages/dashboard/offre/offre.component';
import { RoleComponent } from '../pages/dashboard/role/role.component';
import { TransactionComponent } from '../pages/dashboard/transaction/transaction.component';
import { AdminGuard } from '../core/guard/admin.guard';
import { DetailComponent } from '../pages/dashboard/detail/detail.component';
import { UtilisateurComponent } from '../pages/dashboard/utilisateur/utilisateur.component';
import { SponsorshipComponent } from '../pages/dashboard/sponsorship/sponsorship.component';
import { ApporteurComponent } from '../pages/dashboard/apporteur/apporteur.component';
import { CommissionComponent } from '../pages/dashboard/commission/commission.component';
import { TransferComponent } from '../pages/dashboard/transfer/transfer.component';
import { RoleGuard } from '../core/guard/role.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'index',
        component: IndexComponent,
      },
      {
        path: 'assurance/:type',
        component: AssuranceComponent,
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
      },
      {
        path: 'offre',
        component: OffreComponent,
      },
      {
        path: 'utilisateur',
        component: UtilisateurComponent,
      },
      {
        path: 'role',
        component: RoleComponent,
      },
      {
        path: 'transaction',
        component: TransactionComponent,
      },
      {
        path: 'apporteur',
        component: ApporteurComponent,
      },
      {
        path: 'sponsorship',
        component: SponsorshipComponent,
      },
      {
        path: 'commission',
        component: CommissionComponent,
      },
      {
        path: 'transfer',
        component: TransferComponent,
      },
      {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
