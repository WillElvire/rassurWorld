import { StatesFacades } from './../../../core/facades/state.facade';
import { Component,inject,OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { AppFacade } from 'src/app/core/facades/app.facade';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';

@Component({
  selector: 'app-assurance',
  templateUrl: './assurance.component.html',
  styleUrls: ['./assurance.component.scss'],
})
export class AssuranceComponent implements OnInit {
  private readonly appFacades  = inject(AppFacade);
  private readonly utilsFacade = inject(UtilsFacades);
  private readonly activatedRo = inject(ActivatedRoute);
  private readonly state       = inject(StatesFacades);

  insuranceRequest: any[] = [];
  fechArgument: string = 'unpaid';
  searchArgument = {
    active  : '',
    acepted : '',
    payed   : '',
  };
  p: number = 1;
  constructor() {}

  ngOnInit(): void {
    this.activatedRo.params.subscribe((response: any) => {
      console.log(response.type);
      this.fechArgument = response.type;

      if (
        this.fechArgument.includes('active') ||
        this.fechArgument.includes('inactive')
      ) {
        this.searchArgument.active = this.fechArgument;
        this.searchArgument.payed = 'unpaid';
        this.searchArgument.acepted = 'unacepted';
      }
      if (
        this.fechArgument.includes('payed') ||
        this.fechArgument.includes('unpaid')
      ) {
        this.searchArgument.payed = this.fechArgument;
        this.searchArgument.acepted = 'acepted';
        this.searchArgument.active = 'active';
      }
      if (
        this.fechArgument.includes('acepted') ||
        this.fechArgument.includes('unacepted')
      ) {
        this.searchArgument.acepted = this.fechArgument;
        this.searchArgument.payed = 'unpaid';
        this.searchArgument.active = 'active';
      }
      this.loadInsuranceRequest();
    });
  }

  loadInsuranceRequest() {
    this.appFacades
      .getInsuranceRequest({
        active: this.searchArgument.active,
        payed: this.searchArgument.payed,
        acepted: this.searchArgument.acepted,
      })
      .subscribe(
        (response: any) => {
          console.log(response);
          this.insuranceRequest = response.body.returnObject;
        },
        (error) => {
          if (error.status === 401) {
            this.utilsFacade.errorToastMessage('Veuillez vous reconnecter');
            this.state.logout();
            location.href = '/auth/login';
          }
        }
      );
  }
}
