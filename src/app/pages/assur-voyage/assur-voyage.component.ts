import { Component, inject } from '@angular/core';
import { AppFacade } from 'src/app/core/facades/app.facade';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';
import { UserDto, firstStepUser } from 'src/app/core/interfaces/dto';

@Component({
  selector: 'app-assur-voyage',
  templateUrl: './assur-voyage.component.html',
  styleUrls: ['./assur-voyage.component.scss'],
})
export class AssurVoyageComponent {
  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;
  step4: boolean = false;

  utils = inject(UtilsFacades);
  appFacade = inject(AppFacade);

  userForm: firstStepUser = {};
  user: UserDto = {};

  constructor() {}

  startFirstStep() {
    console.log(this.userForm);
    if (
      !this.userForm.email ||
      !this.userForm.firstname ||
      !this.userForm.lastname ||
      !this.userForm.phone
    ) {
      return this.utils.errorToastMessage(
        'veuillez renseigné tout les champs contenant le symbole (*)'
      );
    }
    this.appFacade.firstStep({ ...this.userForm }, 'voyage').subscribe({
      next: (response: any) => {
        if (response.body.message) {
          this.utils.successToastMessage(response.body.message);
        }
        this.user = response.body.returnObject;
        this.enableNewStep(2);
      },
      error: (err: any) => {
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

  changeStep() {
    if (this.step1) {
      this.step1 = false;
      this.step2 = true;
    } else {
      this.step2 = false;
      this.step1 = true;
    }
  }
}
