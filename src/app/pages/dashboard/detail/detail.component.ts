import { AppFacade } from 'src/app/core/facades/app.facade';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UtilsFacades } from 'src/app/core/facades/utils.facade';
import { CotationComponent } from 'src/app/components/modal/cotation/cotation.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly appFacade = inject(AppFacade);
  private readonly utilsFacade = inject(UtilsFacades);
  private readonly location = inject(Location);
  id?: string;
  insuranceDto: any;
  isVisible: boolean = false;
  isMailVisible: boolean = false;

  constructor() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.id = params.id;
      this.loadRequestDetail(params.id);
    });
  }

  goBack() {
    this.location.back();
  }

  loadRequestDetail(id: string) {
    this.appFacade.getInsurance(id as string).subscribe({
      next: (response: any) => {
        console.log(response);
        this.insuranceDto = response.body.returnObject;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addCotation(event: any) {
    this.isVisible = false;
    return this.postCotation(event);
  }

  postCotation(cotation: string) {
    const id = this.insuranceDto.transaction.id;
    this.appFacade.updateTransaction({ id, total: cotation }).subscribe(
      (response) => {
        console.log(response);
        this.loadRequestDetail(this.id as string);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleOk(): void {
    this.isVisible = false;
    this.isMailVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.isMailVisible = false;
  }

  sendRelance() {
    this.appFacade.relance({firstname : this.insuranceDto?.user?.firstname, lastname : this.insuranceDto?.user?.lastname , phone : this.insuranceDto?.user?.phone})
    .subscribe((response : any)=>{
      console.log(response);
      const resp = response.body;
      if(resp.code == 200) return this.utilsFacade.successToastMessage("Mail envoyé avec success");
      return this.utilsFacade.errorToastMessage("Erreur durant l'envoi du mail");
    },
    (error)=>{
      return this.utilsFacade.errorToastMessage("Erreur durant l'envoi du mail");
    }
    )
  }

  sendWelcome() {
    this.appFacade.welcome({firstname : this.insuranceDto?.user?.firstname, lastname : this.insuranceDto?.user?.lastname  , phone : this.insuranceDto?.user?.phone})
    .subscribe((response : any)=>{
      console.log(response);
      const resp = response.body;
      if(resp.code == 200) return this.utilsFacade.successToastMessage("Mail envoyé avec success");
      return this.utilsFacade.errorToastMessage("Erreur durant l'envoi du mail");
    },
    (error)=>{
      return this.utilsFacade.errorToastMessage("Erreur durant l'envoi du mail");
    }
    )
  }

  sendPayment() {
    this.appFacade.payment({id : this.insuranceDto.id , phone : this.insuranceDto?.user?.phone})
    .subscribe((response : any)=>{
      console.log(response);
      const resp = response.body;
      if(resp.code == 200) return this.utilsFacade.successToastMessage("Mail envoyé avec success");
      return this.utilsFacade.errorToastMessage("Erreur durant l'envoi du mail");
    },
    (error)=>{
      return this.utilsFacade.errorToastMessage("Erreur durant l'envoi du mail");
    }
    )
  }
}
