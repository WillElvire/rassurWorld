import { AppFacade } from 'src/app/core/facades/app.facade';
import { UtilsFacades } from './../../core/facades/utils.facade';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto, firstStepUser } from 'src/app/core/interfaces/dto';

@Component({
  selector: 'app-assur-individuel',
  templateUrl: './assur-individuel.component.html',
  styleUrls: ['./assur-individuel.component.scss']
})
export class AssurIndividuelComponent {
  enable: boolean = false;

  utils = inject(UtilsFacades);
  appFacade = inject(AppFacade);
  router = inject(Router);

  step1  : boolean   = true;
  step2  : boolean   = false;

  user   : UserDto   = {};
  insurance: { id?: string; libelle?: string } = {};
  formData: FormData = new FormData();

  userForm: firstStepUser = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    useWhatsapp: false,
  };
  parrainCode?: string;

  autoInsuranceDetail: any;

  constructor() {
    this.getOffer();
  }

  enableNewStep(stepActive: 1 | 2 | 3 | 4 = 1) {
    if (stepActive == 1) {
      this.step2 = false;

      this.step1 = true;
      return;
    }

    if (stepActive == 2) {
      this.step2 = true;

      this.step1 = false;
      return;
    }

    if (stepActive == 3) {
      this.step2 = false;

      this.step1 = false;
      return;
    }

    if (stepActive == 4) {
      this.step2 = false;

      this.step1 = false;
      return;
    }
  }


  getOffer() {
    this.enable = true;
    this.appFacade.getOfferByKeyword('individuel').subscribe(
      (response: any) => {
        this.insurance = response.body.returnObject[0];
        this.enable = false;
      },
      (error) => {
        this.enable = false;
        this.utils.errorToastMessage(
          "Une erreur est survenue veuillez contacter l'administrateur"
        );
      }
    );
  }



  startFirstStep() {
    if (
      !this.userForm.email ||
      !this.userForm.firstname ||
      !this.userForm.lastname ||
      !this.userForm.phone
    ) {
      return this.utils.errorToastMessage(
        'veuillez renseigner tous les champs contenant le symbole (*)'
      );
    }

    if (!this.utils.testEmail(this.userForm.email)) {
      return this.utils.errorToastMessage(
        'veuillez renseigner une addresse email valide'
      );
    }

    if (!this.utils.testPhoneNumber(this.userForm.phone)) {
      return this.utils.errorToastMessage(
        'veuillez renseigner un numéro de téléphone valide'
      );
    }

    this.enable = true;
    return this.callToServerStep1();
  }

  callToServerStep2(fullTripDto: any) {
    this.appFacade.secondStep(fullTripDto,"individuel" ).subscribe({
      next: (response: any) => {
        console.log(response);
        this.enable = false;
        this.enableNewStep(4);
        console.log(response.body.returnObject as any);
        this.autoInsuranceDetail = response.body.returnObject as any;
      },
      error: (error) => {
        console.log(error.message);
        this.utils.errorToastMessage(!!error.error.message ? error.error.message : error.message);
        this.enable = false;
      },
    });
  }

  callToServerStep1() {
    this.appFacade.firstStep({ ...this.userForm }, 'individuel').subscribe({
      next: (response: any) => {
        this.user = response.body.returnObject;
        this.enable = false;
        this.enableNewStep(2);
      },
      error: (err: any) => {
        this.enable = false;
        this.utils.errorToastMessage(err.message);
      },
    });
  }




}
