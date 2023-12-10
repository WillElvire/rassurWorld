import { AppFacade } from 'src/app/core/facades/app.facade';

import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  BeneficiaryDto,
  IndividuelleSanteDto,
  UserDto,
  firstStepUser,
  insuranceDetail,
} from 'src/app/core/interfaces/dto';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';

@Component({
  selector: 'app-assur-individuel',
  templateUrl: './assur-individuel.component.html',
  styleUrls: ['./assur-individuel.component.scss'],
})
export class AssurIndividuelComponent {
  enable: boolean = false;
  ayantdroit : boolean = false;
  utils = inject(UtilsFacades);
  appFacade = inject(AppFacade);
  router = inject(Router);

  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  step4: boolean = false;


  user: UserDto = {};
  insurance: { id?: string; libelle?: string } = {};
  formData: FormData = new FormData();
  individuel : Partial<IndividuelleSanteDto> = {};

  defaultBeneficiaryDto: Partial<BeneficiaryDto> = {};
  beneficiaries: BeneficiaryDto[] = [{ ...this.defaultBeneficiaryDto }];

  userForm: firstStepUser = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    useWhatsapp: false,
  };
  parrainCode?: string;

  individuelInsuranceDetail: Partial<insuranceDetail> = {} ;
  constructor() {
    this.getOffer();
  }


  preparationAyantDroit(status : boolean) {

   if(status == false) {
    this.utils.successToastMessage("Felicitations votre demande a bien été pris en compte . Veuillez verifier votre addresse email pour les details supplementaire");
    this.router.navigate(["/success"]);
    return;
   }
   this.ayantdroit = status;
  }

  addBeneficiary() {
    this.beneficiaries.push({ ...this.defaultBeneficiaryDto });
  }

  removeBeneficiary(index: number) {
    this.beneficiaries = this.beneficiaries.filter((value, i) => {
      return ( this.beneficiaries.length != 1) ? i != index : i == index;
    });
  }


  saveBeneficiary(index : number) {
    if(!this.beneficiaries[index].firstname  || !this.beneficiaries[index].dateOfBirth ||!this.beneficiaries[index].areaOfBirth || !this.beneficiaries[index].job)
    {
      return this.utils.errorToastMessage('Veuillez renseigner tout les champs nécessaire');
    }
    this.beneficiaries[index].user = this.user.id;
    this.beneficiaries[index].assuranceId = this.individuelInsuranceDetail.id;
    console.log(this.beneficiaries[index]);
  }

  enableNewStep(stepActive: 1 | 2 | 3 | 4 = 1) {
    if (stepActive == 1) {
      this.step2 = false;
      this.step3 = false;
      this.step4 = false;
      this.step1 = true;
      return;
    }

    if (stepActive == 2) {
      this.step2 = true;
      this.step3 = false;
      this.step4 = false;
      this.step1 = false;
      return;
    }

    if (stepActive == 3) {
      this.step2 = false;
      this.step3 = true;
      this.step4 = false;
      this.step1 = false;
      return;
    }

    if (stepActive == 4) {
      this.step2 = false;
      this.step3 = false;
      this.step4 = true;
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


  startThirdStep() {
    this.enable = true;
    const benefDto = {
      beneficaries : this.beneficiaries ,
    }
    return this.callToServerStep3(benefDto);

  }

  callToServerStep3(data : any) {
    this.appFacade.thirdStep(data, 'individuel').subscribe({
      next: (response: any) => {
        console.log(response);
        this.enable = false;
        this.utils.successToastMessage("Felicitations votre demande a bien été pris en compte . Veuillez verifier votre addresse email pour les details supplementaire");
        this.router.navigate(["/success"]);
      },
      error: (error) => {
        console.log(error.message);
        this.utils.errorToastMessage(
          !!error.error.message ? error.error.message : error.message
        );
        this.enable = false;
      },
    });
  }

  startSecondStep() {
    this.enable = true;
    const fullTripDto = { user : this.user?.id,offer : this.insurance?.id,trip : {...this.individuel} ,  parrainCode : this.parrainCode }
    return this.callToServerStep2(fullTripDto);
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

  callToServerStep2(individuelDto: any) {
    this.appFacade.secondStep(individuelDto, 'individuel').subscribe({
      next: (response: any) => {
        console.log(response);
        this.enable = false;
        this.enableNewStep(4);
        console.log(response.body.returnObject as any);
        this.individuelInsuranceDetail = response.body.returnObject as any;
      },
      error: (error) => {
        console.log(error.message);
        this.utils.errorToastMessage(
          !!error.error.message ? error.error.message : error.message
        );
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
