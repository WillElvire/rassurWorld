import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppFacade } from 'src/app/core/facades/app.facade';
import { StatesFacades } from 'src/app/core/facades/state.facade';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';
import { UserDto } from 'src/app/core/interfaces/dto';
import { UserQuery } from 'src/app/store/user$/user.query';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  public readonly appFacades = inject(AppFacade);
  private readonly router = inject(Router);
  private readonly utilsFacade = inject(UtilsFacades);
  private readonly userQuery = inject(UserQuery);
  private readonly state = inject(StatesFacades);

  insuranceRequest: any[] = [];
  stats: any;
  user?: UserDto;
  isSpinning: boolean = true;

  constructor() {
    this.loadStatistics();
    this.user = this.userQuery.fullUser;
    console.log(this.user);
  }

  loadInsuranceRequest() {
    const params = { active: 'active', payed: 'unpaid', limit: 2 };
    this.appFacades.getInsuranceRequest(params).subscribe(
      (response: any) => {
        console.log(response);
        this.insuranceRequest = response.body.returnObject;
        this.isSpinning = false;
      },
      (error) => {
        if (error.status === 401) {
          this.utilsFacade.errorToastMessage('Veuillez vous reconnecter');
          this.state.logout();
          this.isSpinning = false;
          location.href = '/auth/login';
        }
      }
    );
  }

  loadStatistics() {
    this.appFacades.getStatistics().subscribe({
      next: (response: any) => {
        this.stats = response.body.returnObject;
        console.log(this.stats);
        this.loadInsuranceRequest();
      },
      error: (err) => {
        this.isSpinning = false;
        if (err.status === 401) {
          this.utilsFacade.errorToastMessage('Veuillez vous reconnecter');
          this.state.logout();
          location.href = '/auth/login';
        }
      },
    });
  }
}
