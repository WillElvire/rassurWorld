import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { tripInsuranceDto } from './../../core/interfaces/dto';
import { Component, inject } from '@angular/core';
import { AppFacade } from 'src/app/core/facades/app.facade';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';
import { UserDto, firstStepUser } from 'src/app/core/interfaces/dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assur-voyage',
  templateUrl: './assur-voyage.component.html',
  styleUrls: ['./assur-voyage.component.scss'],
})
export class AssurVoyageComponent {

  step1 : boolean = true;
  step2 : boolean = false;
  step3 : boolean = false;
  step4 : boolean = false;

  enable    : boolean = false;
  user      : UserDto = {};
  tripDto   : tripInsuranceDto = {};
  country   : any ;
  formData  : FormData = new FormData()


  insurance : {id ?: string , libelle ?: string} = {};
  tripBookedDetail : {detail ?: string,user ?: string} = {};

  selectedFile !: File;

  userForm : firstStepUser = {
    firstname : "",
    lastname  : "",
    email     : "",
    phone     : ""
  };

  utils     = inject(UtilsFacades);
  appFacade = inject(AppFacade);
  router    = inject(Router);


  constructor() {
    this.getOffer();
  }


  getOffer() {
    this.enable = true;
    this.appFacade.getOfferByKeyword("voyage").subscribe((response : any)=>{
      this.insurance = response.body.returnObject[0];
      this.enable    = false;
    },(error)=>{
      this.enable = false;
      this.utils.errorToastMessage("Une erreur est survenue veuillez contacter l'administrateur");
    } );
  }

  startFirstStep() {
    console.log(this.userForm);
    if (
      !this.userForm.email || !this.userForm.firstname || !this.userForm.lastname || !this.userForm.phone
    ) {
      return this.utils.errorToastMessage(
        'veuillez renseigner tout les champs contenant le symbole (*)'
      );
    }


    if(!this.utils.testEmail(this.userForm.email)){
      return this.utils.errorToastMessage(
        'veuillez renseigner une addresse email valide'
      );
    }

    if(!this.utils.testPhoneNumber(this.userForm.phone)){
      return this.utils.errorToastMessage(
        'veuillez renseigner un numéro de téléphone valide'
      );
    }

    this.enable = true;

    return this.callToServerStep1();
  }

  callToServerStep1() {
    this.appFacade.firstStep({ ...this.userForm }, 'voyage').subscribe({
      next: (response: any) => {
        this.user   = response.body.returnObject;
        this.enable = false;
        this.enableNewStep(2);
      },
      error: (err: any) => {
        this.enable = false;
        this.utils.successToastMessage(err.message);
      },
    });
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
    if(!this.tripDto.country || !this.tripDto.dateOfBack || !this.tripDto.dateOfLeft || !this.tripDto.destination  ){
      return this.utils.errorToastMessage(
        'veuillez renseigner tout les champs contenant le symbole (*)'
      );
    }
    this.enable = true;
    const fullTripDto = { user : this.user?.id,offer : this.insurance?.id,trip : {...this.tripDto}}
    return this.callToServerStep2(fullTripDto);
  }

  callToServerStep2(fullTripDto : any) {
    this.appFacade.secondStep(fullTripDto).subscribe((response : any)=>{
      console.log(response);
      this.enable = false;
      this.enableNewStep(3);
      this.tripBookedDetail = response.body.returnObject as any;

      },(error)=>{
        console.log(error);
        this.enable = false;
      })
  }
  startFinalStep() {

    if(!this.selectedFile){
      return this.utils.errorToastMessage("La photo de votre passeport est requis");
    }
    this.enable  = true;
    this.formData.append("file",this.selectedFile);
    this.formData.append("detail",this.tripBookedDetail.detail as string);
    this.appFacade.uploadPassport(this.formData).subscribe({
      next : (response)=>{
        console.log(response);
        this.enable = false;
        this.utils.successToastMessage("Felicitations votre demande a bien été pris en compte . Veuillez verifier votre addresse email pour les details supplementaire");
        this.router.navigate(["/success"]);
      },
      error : (err)=> {
        console.log(err);
        this.utils.errorToastMessage("Erreur veuillez ressayer");
        this.enable = false;
      }
    })
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

  }

}
