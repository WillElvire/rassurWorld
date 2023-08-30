import { AppFacade } from 'src/app/core/facades/app.facade';
import { UtilsFacades } from './../../core/facades/utils.facade';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto, firstStepUser } from 'src/app/core/interfaces/dto';

@Component({
  selector: 'app-assur-auto',
  templateUrl: './assur-auto.component.html',
  styleUrls: ['./assur-auto.component.scss'],
})
export class AssurAutoComponent {
  enable: boolean = false;

  utils = inject(UtilsFacades);
  appFacade = inject(AppFacade);
  router = inject(Router);

  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  step4: boolean = false;
  months: number[] = Array.from(Array(12).keys());
  user: UserDto = {};
  insurance: { id?: string; libelle?: string } = {};
  country: any;
  formData: FormData = new FormData();
  selectedFile: any;
  userForm: firstStepUser = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    useWhatsapp: false,
  };
  parrainCode?: string;
  autoInsurance: any = {
    date_a_effet: '',
    periodicity: 0,
    valeur_a_neuf: 0,
    price: 0,
    typeTiers: '',
  };

  autoInsuranceDetail: any;

  constructor() {
    this.getOffer();
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

  startSecondStep() {
    if (
      !this.autoInsurance.date_a_effet ||
      !this.autoInsurance.periodicity ||
      !this.autoInsurance.valeur_a_neuf ||
      !this.autoInsurance.price
    ) {
      this.utils.errorToastMessage(
        'Veuillez renseigner tous les champs requis'
      );
      return;
    }
    console.log(this.autoInsurance);
    this.enableNewStep(3);
  }

  getOffer() {
    this.enable = true;
    this.appFacade.getOfferByKeyword('auto').subscribe(
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
    if (!this.autoInsurance.typeTiers) {
      this.utils.errorToastMessage('Veuillez choisir votre offre');
      return;
    }

    this.enable = true;
    const fullAutoInsurance = {
      user: this.user.id,
      offer: this.insurance.id,
      parrainCode: this.parrainCode,
      trip: {
        ...this.autoInsurance,
      },
    };
    return this.callToServerStep2(fullAutoInsurance);
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
    this.appFacade.secondStep(fullTripDto, 'auto').subscribe({
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
    this.appFacade.firstStep({ ...this.userForm }, 'voyage').subscribe({
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

  getUserChoice(event: string) {
    this.autoInsurance.typeTiers = event;
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  startFinalStep() {
    if (!this.selectedFile) {
      return this.utils.errorToastMessage(
        'La photo de votre carte grise est requis'
      );
    }
    this.enable = true;
    this.formData.append('file', this.selectedFile);
    this.formData.append('detail', this.autoInsuranceDetail.detail as string);
    this.appFacade.uploadPassport(this.formData).subscribe({
      next: (response) => {
        console.log(response);
        this.enable = false;
        this.utils.successToastMessage(
          'Felicitations votre demande a bien été pris en compte . Veuillez verifier votre addresse email pour les details supplementaire'
        );
        this.router.navigate(['/success']);
      },
      error: (err) => {
        console.log(err);
        this.utils.errorToastMessage('Erreur veuillez ressayer');
        this.enable = false;
      },
    });
  }
}
