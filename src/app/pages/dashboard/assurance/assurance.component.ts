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
  public readonly appFacades  = inject(AppFacade);
  private readonly utilsFacade = inject(UtilsFacades);
  private readonly activatedRo = inject(ActivatedRoute);
  private readonly state       = inject(StatesFacades);

  insuranceRequest: any[] = [];
  fechArgument: string = 'unpaid';
  isSpinning : boolean = true;
  searchArgument = {
    active  : '',
    acepted : '',
    payed   : '',
  };
  p: number = 1;
  insuranceCopy : any [] = [];

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

  searchInsurance(event : any) {
    const keyword = event.target.value;
    if(keyword == "" || !keyword) {
      this.insuranceRequest = this.insuranceCopy;
      return;
    }

    this.insuranceRequest = this.insuranceRequest.filter(
      insurance =>
      insurance?.id.toLowerCase().includes(keyword.toLowerCase()) ||
      insurance?.offer?.libelle.toLowerCase().includes(keyword.toLowerCase()) ||
      insurance?.user?.email.toLowerCase().includes(keyword.toLowerCase()) ||
      insurance?.user?.phone.toLowerCase().includes(keyword.toLowerCase()) ||
      insurance?.user?.firstname.toLowerCase().includes(keyword.toLowerCase()) ||
      insurance?.user?.lastname.toLowerCase().includes(keyword.toLowerCase())
    );

    //this.insuranceRequest = [];
    console.log(event.target.value)
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
          this.insuranceCopy = this.insuranceRequest;
          this.isSpinning = false;
        },
        (error) => {
          if (error.status === 401) {
            this.utilsFacade.errorToastMessage('Veuillez vous reconnecter');
            this.state.logout();
            location.href = '/auth/login';
          }
          this.isSpinning = false;
        }
      );
  }

  export(type : "xlxs" | "pdf") {
    if(type == "xlxs") {
      this.utilsFacade.xlsProvider.generateExport(this.insuranceRequest , [["id"]])
    }
  }



}
